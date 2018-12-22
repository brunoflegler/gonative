import React, { Component } from 'react';
import {
  View, FlatList, Text, TouchableOpacity, Linking,
} from 'react-native';
import api from '~/services/api';
import IssueItem from '~/pages/issues/issue';
import Header from '~/components/header';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Issues extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    data: [],
    refreshing: false,
    options: {
      all: false,
      open: false,
      close: false,
    },
  };

  async componentDidMount() {
    this.selectOptionAll();
  }

  loadIssues = async () => {
    const { navigation } = this.props;
    const repository = navigation.getParam('repository');

    this.setState({
      refreshing: true,
    });

    try {
      const response = await api.get(`/repos/${repository}/issues`);
      this.setState({
        data: response.data,
      });
    } catch (err) {
      this.setState({
        refreshing: false,
      });
      console.tron.log('Problmas não encontrados');
    }
  };

  handleOpenIssue = ({html_url: url}) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.tron.log(`Don't know how to open URI: ${url}`);
      }
    });
  };

  renderItem = ({ item }) => (
    <IssueItem openIssue={() => this.handleOpenIssue(item)} issue={item} />
  );

  handleBack = () => {
    const { navigation } = this.props;

    navigation.navigate('Main');
  };

  selectOptionAll = async () => {
    this.setState({
      options: { all: true },
    });

    await this.loadIssues();

    this.setState({
      refreshing: false,
    });
  };

  selectOptionOpen = async () => {
    this.setState({
      options: { open: true },
    });

    await this.loadIssues();

    const { data } = this.state;

    const filters = data.filter(i => i.state === 'open');

    this.setState({
      data: filters,
      refreshing: false,
    });
  };

  selectOptionClose = async () => {
    this.setState({
      options: { close: true },
    });

    await this.loadIssues();

    const { data } = this.state;

    const filters = data.filter(i => i.state === 'close');

    this.setState({
      data: filters,
      refreshing: false,
    });
  };

  render() {
    const { data, refreshing, options } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Issues" isBack handleBack={this.handleBack} />
        <View style={styles.filters}>
          <TouchableOpacity onPress={this.selectOptionAll} style={styles.options}>
            <Text style={[styles.title, options.all && styles.titleActive]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.selectOptionOpen} style={styles.options}>
            <Text style={[styles.title, options.open && styles.titleActive]}>Open</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.selectOptionClose} style={styles.options}>
            <Text style={[styles.title, options.close && styles.titleActive]}>Close</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          onRefresh={this.loadIssues}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderItem}
          refreshing={refreshing}
        />
      </View>
    );
  }
}
