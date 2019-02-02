import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FavoriteItem from '~/pages/favorites/components/favoriteItem';
import styles from './styles';

class Favorites extends Component {
  static navigationOptions = {
    title: 'My Favorites',
  };

  static propTypes = {
    favorites: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
        }),
      ),
    }).isRequired,
  };

  renderList = () => {
    const { favorites } = this.props;
    return (
      <FlatList
        data={favorites.data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <FavoriteItem favorite={item} />}
      />
    );
  };

  render() {
    const { favorites } = this.props;
    return (
      <View style={styles.container}>
        {!favorites.data.length ? (
          <Text style={styles.empty}>Nenhum favorito foi adicionado!</Text>
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});

export default connect(mapStateToProps)(Favorites);
