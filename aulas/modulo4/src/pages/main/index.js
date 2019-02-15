import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {
  View, StatusBar, TouchableOpacity, FlatList, ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AlbumItem from './components/AlbumItem';
import { Creators as AlbumsActions } from '../../store/ducks/albums';

import styles from './styles';

class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Sua Biblioteca',
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Search')} style={styles.headerRight}>
        <Icon name="search" size={20} color="#FFF" />
      </TouchableOpacity>
    ),
  });

  static propTypes = {
    albums: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
        }),
      ),
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    getAlbumsRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getAlbumsRequest } = this.props;
    getAlbumsRequest();
  }

  render() {
    const { albums, navigation } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />

        {albums.loading ? (
          <ActivityIndicator size="small" color="#999" style={styles.loading} />
        ) : (
          <FlatList
            data={albums.data}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <AlbumItem
                album={item}
                onPress={() => navigation.navigate('Album', { album: item })}
              />
            )}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.albums,
});

const mapDispatchToProps = dispatch => bindActionCreators(AlbumsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
