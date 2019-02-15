import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'songs/GET_REQUEST',
  SET_SUCCESS: 'songs/SET_SUCCESS',
  SET_FAILURE: 'songs/SET_FAILURE',
};

const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: null,
});

export default function songs(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.SET_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null,
      };
    }
    case Types.SET_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default: {
      return state;
    }
  }
}

export const Creators = {
  getSongsRequest: song => ({
    type: Types.GET_REQUEST,
    payload: {
      song,
    },
  }),
  setSongsSuccess: data => ({
    type: Types.SET_SUCCESS,
    payload: {
      data,
    },
  }),
  setSongsFailure: error => ({
    type: Types.SET_FAILURE,
    payload: {
      error,
    },
  }),
};
