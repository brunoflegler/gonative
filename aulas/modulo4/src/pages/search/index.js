import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
  View, TextInput, FlatList, ActivityIndicator,
} from 'react-native';
import { debounce } from 'lodash';

import styles from './styles';
import SongList from '../../components/SongList';
import { Creators as SongsActions } from '../../store/ducks/songs';

class Search extends Component {
  static navigationOptions = {
    title: 'Pesquisar',
  };

  static propTypes = {
    songs: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          author: PropTypes.string,
          thumbnail: PropTypes.string,
        }),
      ),
    }).isRequired,
    getSongsRequest: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    const { getSongsRequest } = this.props;
    this.findSongs = debounce(getSongsRequest, 500);
  }

  state = {
    searchInput: '',
  };

  handleSearch = (searchInput) => {
    this.setState({
      searchInput,
    });

    this.findSongs(searchInput);
  };

  render() {
    const { songs } = this.props;
    const { searchInput } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            value={searchInput}
            style={styles.searchInput}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Buscar por músicas..."
            placeholderTextColor="#666"
            underlineColorAndroid="transparent"
            onChangeText={this.handleSearch}
          />
        </View>

        {songs.loading ? (
          <ActivityIndicator size="small" color="#999" style={styles.loading} />
        ) : (
          <SongList data={songs.data} />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  songs: state.songs,
});

const mapDispatchToProps = dispatch => bindActionCreators(SongsActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
