import { all, takeLatest } from 'redux-saga/effects';
import { getProducts } from './products';
import { Types as ProductsTypes } from '../ducks/products';

export default function* rootSaga() {
  return yield all([takeLatest(ProductsTypes.GET_REQUEST, getProducts)]);
}
