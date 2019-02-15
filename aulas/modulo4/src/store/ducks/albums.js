import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'albums/GET_REQUEST',
  SET_SUCCESS: 'albums/SET_SUCCESS',
  SET_FAILURE: 'albums/SET_FAILURE',
};

const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: null,
});

export default function albums(state = INITIAL_STATE, action) {
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
  getAlbumsRequest: () => ({
    type: Types.GET_REQUEST,
  }),
  setAlbumsSuccess: data => ({
    type: Types.SET_SUCCESS,
    payload: {
      data,
    },
  }),
  setAlbumsFailure: error => ({
    type: Types.SET_FAILURE,
    payload: {
      error,
    },
  }),
};
