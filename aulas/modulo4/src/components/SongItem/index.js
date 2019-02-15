import React from 'react';
import {
  View, TouchableOpacity, Text, ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import styles from './styles';

const SongItem = ({ song, player, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.info}>
      <Text style={[styles.title, player.song.id === song.id ? styles.active : {}]}>
        {song.title}
      </Text>
      <Text style={styles.author}>{song.author}</Text>
    </View>
    {player.selected === song.id ? (
      <ActivityIndicator size="small" color="#999" style={styles.loading} />
    ) : (
      <Icon name="play-circle-outline" size={24} style={styles.play} />
    )}
  </TouchableOpacity>
);

SongItem.propTypes = {
  song: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
  player: PropTypes.shape({
    song: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

const mapStateToProps = state => ({
  player: state.player,
});

export default connect(mapStateToProps)(SongItem);
