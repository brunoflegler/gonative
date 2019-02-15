import { all, takeLatest } from 'redux-saga/effects';

import { getAlbums } from './albums';
import { getSongs } from './songs';
import {
  setSong, setPlay, setPause, setNext, setPrevious,
} from './player';

import { Types as AlbumTypes } from '../ducks/albums';
import { Types as SongTypes } from '../ducks/songs';
import { Types as PlayerTypes } from '../ducks/player';

export default function* rootSaga() {
  return yield all([
    takeLatest(AlbumTypes.GET_REQUEST, getAlbums),
    takeLatest(SongTypes.GET_REQUEST, getSongs),
    takeLatest(PlayerTypes.GET_REQUEST, setSong),
    takeLatest(PlayerTypes.SET_PLAY, setPlay),
    takeLatest(PlayerTypes.SET_PAUSE, setPause),
    takeLatest(PlayerTypes.SET_NEXT, setNext),
    takeLatest(PlayerTypes.SET_PREVIOUS, setPrevious),
  ]);
}
