import { call, put } from 'redux-saga/effects';
import currency from '../../services/currency';
import api from '../../services/api';
import { Creators as ProductsActions } from '../ducks/products';

currency.locale('br-pt');
export function* getProducts(action) {
  try {
    const response = yield call(api.get, `category_products/${action.payload.params}`);

    const data = response.data.products.map(p => ({
      ...p,
      price_format: currency(p.price).format('$0,0.00'),
    }));
    yield put(ProductsActions.setProductsSuccess(data));
  } catch (error) {
    yield put(
      ProductsActions.setProductsFailure({ message: 'Error while searching for products' }),
    );
  }
}
