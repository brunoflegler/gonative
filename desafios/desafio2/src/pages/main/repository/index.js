import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import styles from './styles';

class RepositoryItem extends Component {
  static propTypes = {
    repository: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {};

  render() {
    const { repository, navigation } = this.props;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Issues', { repository: repository.full_name })}
      >
        <View style={styles.container}>
          <Image style={styles.avatar} source={{ uri: repository.owner.avatar_url }} />
          <View style={styles.info}>
            <Text style={styles.title}>{repository.name}</Text>
            <Text style={styles.login}>{repository.owner.login}</Text>
          </View>
          <TouchableOpacity>
            <Icon name="angle-right" size={20} color="#DDD" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(RepositoryItem);
