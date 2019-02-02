import { all, takeLatest } from 'redux-saga/effects';
import { addFavoriteRequest } from './favorites';
import { Types as FavoriteTypes } from '~/store/ducks/favorites';

export default function* rootSaga() {
  return yield all([takeLatest(FavoriteTypes.ADD_REQUEST, addFavoriteRequest)]);
}
