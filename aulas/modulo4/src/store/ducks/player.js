import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'player/GET_REQUEST',
  SET_SUCCESS: 'player/SET_SUCCESS',
  SET_FAILURE: 'player/SET_FAILURE',
  SET_PLAY: 'player/SET_PLAY',
  SET_PAUSE: 'player/SET_PAUSE',
  SET_NEXT: 'player/SET_NEXT',
  SET_PREVIOUS: 'player/SET_PREVIOUS',
};

const INITIAL_STATE = Immutable({
  song: {},
  list: [],
  paused: true,
  selected: null,
  error: null,
});

export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, selected: action.payload.song.id, paused: false };
    case Types.SET_SUCCESS:
      return {
        ...state,
        list: action.payload.list,
        song: action.payload.song,
        selected: null,
        paused: false,
      };
    case Types.SET_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        selected: null,
        paused: false,
      };
    case Types.SET_PLAY:
      return { ...state, paused: false };
    case Types.SET_PAUSE:
      return { ...state, paused: true };
    default: {
      return state;
    }
  }
}

export const Creators = {
  setSongRequest: (song, list) => ({
    type: Types.GET_REQUEST,
    payload: {
      song,
      list,
    },
  }),
  setSongSuccess: (song, list) => ({
    type: Types.SET_SUCCESS,
    payload: {
      song,
      list,
    },
  }),
  setSongFailure: error => ({
    type: Types.SET_FAILURE,
    payload: {
      error,
    },
  }),
  setPlay: () => ({
    type: Types.SET_PLAY,
  }),
  setPause: () => ({
    type: Types.SET_PAUSE,
  }),
  setNext: () => ({
    type: Types.SET_NEXT,
  }),
  setPrevious: () => ({
    type: Types.SET_PREVIOUS,
  }),
};
