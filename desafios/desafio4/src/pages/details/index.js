import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductItemDetails from './components/ProductItemDetails';
import { Creators as CartActions } from '../../store/ducks/cart';

import styles from './styles';

class Detail extends Component {
  static navigationOptions = {
    title: 'Detalhes do Produto',
  };

  static propType = {
    product: PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      name: PropTypes.string,
      brand: PropTypes.string,
      price_format: PropTypes.string,
    }).isRequired,
    setProductCart: PropTypes.func.isRequired,
  };

  setProductCart = () => {
    const { product, setProductCart, navigation } = this.props;

    setProductCart(product);

    navigation.navigate('Cart');
  };

  render() {
    const { product, setProductCart } = this.props;
    return (
      <View style={styles.container}>
        <ProductItemDetails product={product} setProductCart={this.setProductCart} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  product: state.products.product,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail);
