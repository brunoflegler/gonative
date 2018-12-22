import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';

import api from '~/services/api';

import styles from './styles';

export default class Welcome extends Component {
  state = {
    username: '',
    loading: false,
    error: false,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  checkExistsUser = async (username) => {
    const response = await api.get(`/users/${username}`);
    return response.data;
  };

  saveUser = async (username) => {
    await AsyncStorage.setItem('@github:username', username);
  };

  signIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;

    this.setState({
      loading: true,
    });

    try {
      await this.checkExistsUser(username);
      await this.saveUser(username);

      navigation.navigate('User');
    } catch (err) {
      this.setState({
        loading: false,
        error: true,
      });
      console.tron.log('Usuário não existe');
    }
  };

  render() {
    const { username, loading, error } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.text}>
          Para continuar precisamos que você informe o usuário do Github
        </Text>

        {error && <Text style={styles.error}>Usuário inexistente</Text>}

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorret={false}
            placeholder="Digite seu usuário"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({
              username: text,
            })
            }
          />
          <TouchableOpacity onPress={this.signIn} style={styles.button}>
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Prosseguir</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
