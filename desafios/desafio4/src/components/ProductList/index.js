import React from 'react';

import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import ProductItem from '../ProductItem';

import styles from './styles';

const handleClickButton = (product, props) => {
  const { setProductRequest, navigation } = props;
  setProductRequest(product);
  navigation.navigate('Details');
};

const ProductList = ({ data, ...props }) => (
  <View style={styles.container}>
    <FlatList
      {...props}
      data={data}
      numColumns={2}
      keyExtractor={p => String(p.id)}
      renderItem={({ item }) => (
        <ProductItem {...props} product={item} onPress={() => handleClickButton(item, props)} />
      )}
    />
  </View>
);

ProductList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default ProductList;
