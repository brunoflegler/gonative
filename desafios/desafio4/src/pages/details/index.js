import React from 'react';

import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import ProductItemDetails from './components/ProductItemDetails';

import styles from './styles';

const Detail = ({ product }) => (
  <View style={styles.container}>
    <ProductItemDetails product={product} />
  </View>
);

Detail.navigationOptions = {
  title: 'Detalhes do Produto',
};

const mapStateToProps = state => ({
  product: state.products.product,
});

export default connect(mapStateToProps)(Detail);
