export const Types = {
  GET_REQUEST: 'products/GET_REQUEST',
  SET_SUCCESS: 'products/SET_SUCCESS',
  SET_FAILURE: 'products/SET_FAILURE',
  SET_PRODUCT: 'products/SET_PRODUCT',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
  product: null,
};

export default function getProducts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, params: action.payload.params, loading: true };
    case Types.SET_SUCCESS:
      return {
        ...state,
        loading: false,
        product: null,
        data: action.payload.data || [],
      };
    case Types.SET_FAILURE:
      return {
        ...state,
        loading: false,
        product: null,
        error: action.payload.error,
      };
    case Types.SET_PRODUCT:
      return {
        ...state,
        loading: false,
        error: null,
        product: action.payload.product,
      };

    default:
      return state;
  }
}

export const Creators = {
  getProductsRequest: params => ({
    type: Types.GET_REQUEST,
    payload: {
      params,
    },
  }),
  setProductsSuccess: data => ({
    type: Types.SET_SUCCESS,
    payload: {
      data,
    },
  }),
  setProductsFailure: error => ({
    type: Types.SET_FAILURE,
    payload: {
      error,
    },
  }),
  setProductRequest: product => ({
    type: Types.SET_PRODUCT,
    payload: {
      product,
    },
  }),
};
