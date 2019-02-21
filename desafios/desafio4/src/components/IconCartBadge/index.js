import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const IconCartBadge = ({ tintColor, count }) => (
  <View>
    {count === 0 ? (
      <Icon name="shopping-cart" size={24} color={tintColor} />
    ) : (
      <View>
        <Icon name="shopping-cart" size={24} color={tintColor} />
        <Text style={[styles.container, styles.badge]}>{count}</Text>
      </View>
    )}
  </View>
);

IconCartBadge.propTypes = {
  tintColor: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  count: state.cart.data.length,
});

export default connect(mapStateToProps)(IconCartBadge);
