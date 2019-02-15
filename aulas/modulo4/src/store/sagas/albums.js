import { call, put } from 'redux-saga/effects';
import { Creators as AlbumsActions } from '../ducks/albums';
import api from '../../services/api';

export function* getAlbums() {
  try {
    const response = yield call(api.get, '/albums');
    yield put(AlbumsActions.setAlbumsSuccess(response.data));
  } catch (error) {
    // yield put(AlbumsActions.setAlbumsFailure({ error: 'Error while searching for albums' }));
    yield put(AlbumsActions.setAlbumsFailure(error));
  }
}
