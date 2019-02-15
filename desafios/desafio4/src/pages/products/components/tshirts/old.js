import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import { Creators as ProductsActions } from '../../../../store/ducks/products';
import ProductList from '../../../../components/ProductList';

import styles from './styles';

const category = 1;

class TShirt extends Component {
  static propTypes = {
    isFocused: PropTypes.bool.isRequired,
    getProductsRequest: PropTypes.func.isRequired,
    setProductRequest: PropTypes.func.isRequired,
    products: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
        }),
      ),
    }).isRequired,
  };

  componentDidMount() {
    const { isFocused } = this.props;

    if (isFocused) {
      this.getProducts();
    }
  }

  componentDidUpdate(prevProps) {
    const { isFocused } = this.props;

    if (isFocused && isFocused !== prevProps.isFocused) {
      this.getProducts();
    }
  }

  getProducts = () => {
    const { getProductsRequest } = this.props;
    getProductsRequest(category);
  };

  render() {
    const { products, setProductRequest } = this.props;
    return (
      <View style={styles.container}>
        <ProductList {...this.props} data={products.data} setProductRequest={setProductRequest} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default compose(
  withNavigationFocus,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(TShirt);
