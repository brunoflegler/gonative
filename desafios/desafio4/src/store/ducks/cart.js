import currency from '../../services/currency';

export const Types = {
  GET_REQUEST: 'cart/GET_REQUEST',
  SET_SUCCESS: 'cart/SET_SUCCESS',
  SET_FAILURE: 'cart/SET_FAILURE',
  SET_PRODUCT_CART: 'cart/SET_PRODUCT_CART',
  SET_PRODUCT_QUANTITY: 'cart/SET_PRODUCT_QUANTITY',
  REMOVE_PRODUCT: 'cart/REMOVE_PRODUCT',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function getCart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.SET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case Types.SET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case Types.SET_PRODUCT_CART: {
      const index = state.data.findIndex(c => c.product.id === action.payload.product.id);

      if (index === -1) {
        return {
          ...state,
          loading: false,
          data: [...state.data, { product: action.payload.product, quantity: 1 }],
        };
      }

      const cart = state.data[index];
      const carts = state.data.filter(c => c.product.id !== action.payload.product.id, []);

      return {
        ...state,
        loading: false,
        data: [
          ...carts,
          {
            quantity: cart.quantity + 1,
            product: {
              ...cart.product,
              price_format: currency(cart.product.price * (cart.quantity + 1)).format('$0,0.00'),
            },
          },
        ],
      };
    }
    case Types.SET_PRODUCT_QUANTITY: {
      const { cart, quantity } = action.payload;
      const carts = state.data.filter(c => c.product.id !== cart.product.id, []);

      const data = [
        ...carts,
        {
          quantity,
          product: {
            ...cart.product,
            price_format: currency(cart.product.price * quantity).format('$0,0.00'),
          },
        },
      ];

      return {
        ...state,
        loading: false,
        data,
      };
    }
    case Types.REMOVE_PRODUCT: {
      const data = state.data.filter(f => f.product.id !== action.payload.id);

      return {
        ...state,
        loading: false,
        product: null,
        data,
      };
    }

    default:
      return state;
  }
}

export const Creators = {
  getCartRequest: () => ({
    type: Types.GET_REQUEST,
  }),
  setCartSuccess: data => ({
    type: Types.SET_SUCCESS,
    payload: {
      data,
    },
  }),
  setCartFailure: error => ({
    type: Types.SET_FAILURE,
    payload: {
      error,
    },
  }),
  setProductCart: product => ({
    type: Types.SET_PRODUCT_CART,
    payload: {
      product,
    },
  }),
  setProductQuatity: (cart, quantity) => ({
    type: Types.SET_PRODUCT_QUANTITY,
    payload: {
      cart,
      quantity,
    },
  }),
  removeProduct: id => ({
    type: Types.REMOVE_PRODUCT,
    payload: {
      id,
    },
  }),
};
