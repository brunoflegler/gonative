import { call, put } from 'redux-saga/effects';
import { Creators as SongsActions } from '../ducks/songs';
import api from '../../services/api';

export function* getSongs(action) {
  try {
    const response = yield call(api.get, `/songs?q=${action.payload.song}`);
    yield put(SongsActions.setSongsSuccess(response.data));
  } catch (error) {
    yield put(SongsActions.setSongsFailure({ error: 'Error while searching for songs' }));
  }
}
