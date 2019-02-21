import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View, FlatList } from 'react-native';
import { Creators as CartActions } from '../../store/ducks/cart';
import currency from '../../services/currency';
import ProductItem from './components/ProductItem';

import styles from './styles';

class Cart extends Component {
  static navigationOptions = {
    title: 'Carrinho',
  };

  static propTypes = {
    cart: PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number,
      }),
    }).isRequired,
    setProductQuatity: PropTypes.func.isRequired,
    removeProduct: PropTypes.func.isRequired,
    total: PropTypes.string.isRequired,
  };

  onChangeInput = (cart, text) => {
    const { setProductQuatity } = this.props;

    if (text === 0) return;

    setProductQuatity(cart, text);
  };

  render() {
    const { cart, total, removeProduct } = this.props;
    return (
      <View style={styles.container}>
        {cart.data.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>Seu carrinho está vazio</Text>
            <Text style={styles.emptyTextBack}>
              Voltar para página inicial ou escolha outros produtos.
            </Text>
          </View>
        ) : (
          <FlatList
            data={cart.data}
            keyExtractor={p => String(p.id)}
            renderItem={({ item }) => (
              <ProductItem
                onChangeQuantity={this.onChangeInput}
                onRemoveProduct={removeProduct}
                cart={item}
              />
            )}
          />
        )}
        <View style={styles.containerSubtotal}>
          <Text style={styles.subtotal}>Subtotal</Text>
          <Text style={styles.total}>{total}</Text>
        </View>
      </View>
    );
  }
}

const reducer = (acc, cur) => acc + cur.quantity * cur.product.price;

const mapStateToProps = state => ({
  cart: state.cart,
  total: currency(state.cart.data.reduce(reducer, 0)).format('$0,0.00'),
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
