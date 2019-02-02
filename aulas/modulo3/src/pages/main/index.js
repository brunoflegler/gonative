import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as FavoriteActions } from '~/store/ducks/favorites';

import styles from './styles';
import { colors } from '~/styles';

class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    addFavoriteRequest: PropTypes.func.isRequired,
    favoritesCount: PropTypes.number.isRequired,
    favorites: PropTypes.shape({
      error: PropTypes.string,
      loading: PropTypes.bool,
    }).isRequired,
  };

  state = {
    favoriteInputText: '',
  };

  navigateToFavorites = () => {
    const { navigation } = this.props;
    navigation.navigate('Favorites');
  };

  addFavorites = () => {
    const { favoriteInputText } = this.state;
    const { addFavoriteRequest } = this.props;
    if (!favoriteInputText.length) return;
    addFavoriteRequest(favoriteInputText);
  };

  render() {
    const { favoriteInputText } = this.state;
    const { favoritesCount, favorites } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.primaryDark} />

        <View style={styles.content}>
          <Text style={styles.title}>GitMark</Text>
          <Text style={styles.description}>
            Come adicionando alguns repositórios aos seus favoritos
          </Text>

          <View style={styles.form}>
            {!!favorites.error && <Text style={styles.error}>{favorites.error}</Text>}

            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="usuário/repositório"
              underlineColorAndroid="transparent"
              value={favoriteInputText}
              onChangeText={text => this.setState({ favoriteInputText: text })}
            />

            <TouchableOpacity style={styles.button} onPress={this.addFavorites} activeOpacity={0.6}>
              {favorites.loading ? (
                <ActivityIndicator size="small" color={styles.loading.color} />
              ) : (
                <Text style={styles.buttonText}>Adicionar</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={this.navigateToFavorites}>
            <Text style={styles.footerLink}>
              {' '}
Meus favoritos (
              {favoritesCount}
)
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

const mapStateToProps = state => ({
  favoritesCount: state.favorites.data.length,
  favorites: state.favorites,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
