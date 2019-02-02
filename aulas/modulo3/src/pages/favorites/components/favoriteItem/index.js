import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const FavoriteItem = ({ favorite: { name, owner, description } }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: owner.avatar_url }} />
    <View style={styles.info}>
      <Text style={styles.title}>{name}</Text>
      <Text numberOfLines={2} style={styles.description}>
        {description}
      </Text>
    </View>
  </View>
);

FavoriteItem.propTypes = {
  favorite: PropTypes.shape({
    name: PropTypes.string,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
    }),
    description: PropTypes.string,
  }).isRequired,
};

export default FavoriteItem;
