import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Creators as PlayerActions } from '../../store/ducks/player';

import styles from './styles';

const Player = ({
  player, setPlay, setPause, setNext, setPrevious,
}) => {
  if (player.song.id === undefined) return null;

  const setPlayOrPause = player.paused ? setPlay : setPause;

  console.log(setPlayOrPause, player);

  const icon = player.paused ? 'play-circle-filled' : 'pause-circle-filled';

  return (
    <View style={styles.container}>
      <View style={styles.currentSong}>
        <Text style={styles.title}>{player.song.title}</Text>
        <Text style={styles.author}>{player.song.author}</Text>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity onPress={setPrevious}>
          <Icon name="skip-previous" size={20} style={styles.controlsIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.play} onPress={setPlayOrPause}>
          <Icon name={icon} size={36} style={styles.controlsIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={setNext}>
          <Icon name="skip-next" size={20} style={styles.controlsIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

Player.propTypes = {
  player: PropTypes.shape({
    song: PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
    }),
  }).isRequired,
  setPlay: PropTypes.func.isRequired,
  setPause: PropTypes.func.isRequired,
  setNext: PropTypes.func.isRequired,
  setPrevious: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  player: state.player,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);
