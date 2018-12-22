import React, { Component } from 'react';
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import Header from '~/components/header';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '~/services/api';
import RepositoryItem from '~/pages/main/repository';
import styles from './styles';

export default class Main extends Component {
  state = {
    data: [],
    repository: '',
    loading: false,
  };

  async componentDidMount() {
    const data = JSON.parse(await AsyncStorage.getItem('@github:repositories')) || [];

    this.setState({
      data,
    });
  }

  renderItem = ({ item }) => <RepositoryItem repository={item} />;

  addRepository = async () => {
    const { data, repository } = this.state;

    if (!repository) return;

    try {
      this.setState({
        loading: true,
      });

      const response = await api.get(`/repos/${repository}`);

      this.setState({
        repository: '',
        data: [...data, response.data],
        loading: false,
      });

      const { data: local } = this.state;

      await AsyncStorage.setItem('@github:repositories', JSON.stringify(local));
    } catch (err) {
      this.setState({
        loading: false,
      });
      console.tron.log('Repositório não encontrado');
    }
  };

  render() {
    const { data, repository, loading } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Repositories" />
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicionar novo repositório"
            underlineColorAndroid="transparent"
            value={repository}
            onChangeText={text => this.setState({ repository: text })}
          />
          <TouchableOpacity onPress={this.addRepository}>
            {loading ? (
              <ActivityIndicator style={styles.add} size="small" color="#000" />
            ) : (
              <Icon style={styles.add} name="plus" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        <FlatList
          data={data}
          onRefresh={this.loadRepositories}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
