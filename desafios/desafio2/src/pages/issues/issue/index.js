import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class IssueItem extends Component {
  static propTypes = {
    issue: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    openIssue: PropTypes.func.isRequired,
  };

  state = {};

  render() {
    const { issue, openIssue } = this.props;
    return (
      <TouchableOpacity onPress={openIssue}>
        <View style={styles.container}>
          <Image style={styles.avatar} source={{ uri: issue.user.avatar_url }} />
          <View style={styles.info}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
              {issue.title}
            </Text>
            <Text style={styles.login}>{issue.user.login}</Text>
          </View>
          <TouchableOpacity>
            <Icon name="angle-right" size={20} color="#DDD" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
}

export default IssueItem;
