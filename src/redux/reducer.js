// reducers.js

import { ADD_TO_CART, EMPTY_CART, ADD_TO_ORDER_HISTORY } from "./actions";

const initialState = {
  cart: {
    items: [],
  },
  orderHistory: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: {
          items: [...state.cart.items, action.payload],
        },
      };
    case EMPTY_CART:
      return {
        ...state,
        cart: {
          items: [],
        },
      };
    case ADD_TO_ORDER_HISTORY:
      return {
        ...state,
        orderHistory: [...state.orderHistory, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
