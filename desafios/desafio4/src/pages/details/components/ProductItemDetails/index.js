import React from 'react';
import PropTypes from 'prop-types';

import {
  Text, View, Image, TouchableOpacity,
} from 'react-native';
import styles from './styles';

const ProductItemDetails = ({ product, setProductCart }) => (
  <View style={styles.container}>
    <View style={styles.containerImage}>
      <Image style={styles.image} source={{ uri: product.image }} />
    </View>
    <View style={styles.wrapper}>
      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.brand}>{product.brand}</Text>
      </View>
      <Text style={styles.price}>{product.price_format}</Text>
    </View>
    <TouchableOpacity onPress={() => setProductCart(product)} style={styles.button}>
      <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
    </TouchableOpacity>
  </View>
);

ProductItemDetails.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    price_format: PropTypes.string,
  }).isRequired,
  setProductCart: PropTypes.func.isRequired,
};

export default ProductItemDetails;
