import React, { Component } from 'react';
import {
  View, ActivityIndicator, FlatList, AsyncStorage,
} from 'react-native';
import Header from '~/components/header';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import api from '~/services/api';

import styles from './styles';
import RepositoryItem from '~/pages/repositories/repository';

const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  async componentDidMount() {
    this.loadRepositories();
  }

  renderItem = ({ item }) => <RepositoryItem repository={item} />;

  loadRepositories = async () => {
    this.setState({
      refreshing: true,
    });
    const username = await AsyncStorage.getItem('@github:username');

    try {
      const { data } = await api.get(`/users/${username}/repos`);

      this.setState({
        data,
        loading: false,
        refreshing: false,
      });
    } catch (err) {
      console.tron.log('Erro na listagem do repositórios');
    }
  };

  renderList = () => {
    const { data, refreshing } = this.state;

    return (
      <FlatList
        data={data}
        onRefresh={this.loadRepositories}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderItem}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Repositories" />
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
