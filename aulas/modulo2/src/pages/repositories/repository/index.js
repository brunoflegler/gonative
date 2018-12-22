import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const RepositoryItem = ({ repository }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{repository.full_name}</Text>

    <View style={styles.infoContainer}>
      <View style={styles.info}>
        <Icon name="star" size={12} style={styles.infoIcon} />
        <Text style={styles.info}>{repository.stargazers_count}</Text>
      </View>
      <View style={styles.info}>
        <Icon name="code-fork" size={12} style={styles.infoIcon} />
        <Text style={styles.info}>{repository.forks_count}</Text>
      </View>
      <View style={styles.info}>
        <Icon name="eye" size={12} style={styles.infoIcon} />
        <Text style={styles.info}>{repository.watchers_count}</Text>
      </View>
    </View>
  </View>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    full_name: PropTypes.string.isRequired,
    stargazers_count: PropTypes.number.isRequired,
    forks_count: PropTypes.number.isRequired,
    watchers_count: PropTypes.number.isRequired,
  }).isRequired,
};

export default RepositoryItem;
