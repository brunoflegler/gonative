import React from 'react';
import PropTypes from 'prop-types';
import { View, ImageBackground, Text } from 'react-native';
import SongList from '../../components/SongList';

import styles from './styles';

const Album = ({ navigation }) => {
  const { album } = navigation.state.params;

  return (
    <View style={styles.container}>
      <ImageBackground blurRadius={5} style={styles.thumbnail} source={{ uri: album.thumbnail }}>
        <View style={styles.thumbnailContainer}>
          <Text style={styles.author}>{album.author}</Text>
          <Text style={styles.title}>{album.title}</Text>
        </View>
      </ImageBackground>
      <SongList data={album.songs} />
    </View>
  );
};

Album.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.album.title,
});

Album.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Album;
