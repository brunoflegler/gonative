import { call, put, select } from 'redux-saga/effects';
import RNSound from 'react-native-sound/sound';

import { Creators as PlayerActions } from '../ducks/player';

const Sound = new RNSound();

export function* setPlay() {
  try {
    yield call(Sound.play);
  } catch (error) {
    yield put(PlayerActions.setSongFailure({ error: 'Error play song' }));
  }
}

export function* setPause() {
  try {
    yield call(Sound.pause);
  } catch (error) {
    yield put(PlayerActions.setSongFailure({ error: 'Error pause song' }));
  }
}

export function* setNext() {
  try {
    const player = yield select(state => state.player);

    const index = player.list.findIndex(song => song.id === player.song.id);
    const next = player.list[index + 1];

    console.tron.log(next);

    if (next) {
      yield put(PlayerActions.setSongRequest(next, player.list));
    }
  } catch (error) {
    yield put(PlayerActions.setSongFailure({ error: 'Error next song' }));
  }
}

export function* setPrevious() {
  try {
    const player = yield select(state => state.player);
    const index = player.list.findIndex(song => song.id === player.song.id);
    const next = player.list[index - 1];

    if (next) {
      yield put(PlayerActions.setSongRequest(next, player.list));
    }
  } catch (error) {
    yield put(PlayerActions.setSongFailure({ error: 'Error previous song' }));
  }
}

export function* setSong(action) {
  try {
    if (Sound.isLoaded()) yield call(Sound.release);

    yield call(Sound.init, action.payload.song.file);
    yield call(setPlay);
    yield put(PlayerActions.setSongSuccess(action.payload.song, action.payload.list));
  } catch (error) {
    yield put(PlayerActions.setSongFailure({ error: 'Error player set song' }));
  }
}
