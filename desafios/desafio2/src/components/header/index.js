import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    isBack: PropTypes.bool,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    handleBack: PropTypes.oneOfType(PropTypes.func),
  };

  static defaultProps = {
    isBack: false,
    handleBack: PropTypes.NULL,
  };

  state = {};

  render() {
    const { isBack, title, handleBack } = this.props;

    return (
      <View style={styles.container}>
        {isBack ? (
          <TouchableOpacity onPress={handleBack}>
            <Icon style={styles.back} name="arrow-left" size={20} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        <Text style={styles.title}>{title}</Text>
        <View />
      </View>
    );
  }
}

export default withNavigation(Header);
