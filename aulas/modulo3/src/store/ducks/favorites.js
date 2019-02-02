/**
 * TYPES
 */

export const Types = {
  ADD_REQUEST: 'favorites/ADD_REQUEST',
  ADD_SUCCESS: 'favorites/ADD_SUCCESS',
  ADD_FAILURE: 'favorites/ADD_FAILURE',
};

const INITIAL_STATE = {
  data: [],
  error: null,
  loading: false,
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.ADD_SUCCESS:
      return {
        error: null,
        loading: false,
        data: [...state.data, action.payload.favorite],
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    default: {
      return state;
    }
  }
}

/**
 * CREATORS
 */

export const Creators = {
  addFavoriteRequest: text => ({
    type: Types.ADD_REQUEST,
    payload: {
      text,
    },
  }),

  addFavoriteSuccess: favorite => ({
    type: Types.ADD_SUCCESS,
    payload: {
      favorite,
    },
  }),

  addFavoriteError: message => ({
    type: Types.ADD_FAILURE,
    payload: {
      message,
    },
  }),
};
