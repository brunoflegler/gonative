import React from 'react';

import {
  View, Text, Image, Picker, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const ProductItem = ({ cart, onChangeQuantity, onRemoveProduct }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: cart.product.image }} />
    <View style={styles.info}>
      <Text style={styles.name}>{cart.product.name}</Text>
      <Text style={styles.brand}>{cart.product.brand}</Text>
      <Text style={styles.price}>{cart.product.price_format}</Text>
    </View>
    <Picker
      selectedValue={cart.quantity}
      style={styles.picker}
      onValueChange={itemValue => onChangeQuantity(cart, itemValue)}
    >
      <Picker.Item itemStyle={styles.pickerItem} label="1" value={1} />
      <Picker.Item itemStyle={styles.pickerItem} label="2" value={2} />
      <Picker.Item itemStyle={styles.pickerItem} label="3" value={3} />
      <Picker.Item itemStyle={styles.pickerItem} label="4" value={4} />
      <Picker.Item itemStyle={styles.pickerItem} label="5" value={5} />
      <Picker.Item itemStyle={styles.pickerItem} label="6" value={6} />
      <Picker.Item itemStyle={styles.pickerItem} label="7" value={7} />
      <Picker.Item itemStyle={styles.pickerItem} label="8" value={8} />
      <Picker.Item itemStyle={styles.pickerItem} label="9" value={9} />
      <Picker.Item itemStyle={styles.pickerItem} label="10" value={10} />
    </Picker>
    <TouchableOpacity onPress={() => onRemoveProduct(cart.product.id)}>
      <Icon name="trash" size={15} />
    </TouchableOpacity>
  </View>
);

ProductItem.propTypes = {
  cart: PropTypes.shape({
    product: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      brand: PropTypes.string,
      price_format: PropTypes.string,
    }),
  }).isRequired,
  onChangeQuantity: PropTypes.func.isRequired,
  onRemoveProduct: PropTypes.func.isRequired,
};

export default ProductItem;
