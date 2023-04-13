// actions.js

export const ADD_TO_CART = "ADD_TO_CART";
export const EMPTY_CART = "EMPTY_CART";
export const ADD_TO_ORDER_HISTORY = "ADD_TO_ORDER_HISTORY";

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const emptyCart = () => ({
  type: EMPTY_CART,
});

export const addToOrderHistory = (order) => ({
  type: ADD_TO_ORDER_HISTORY,
  payload: order,
});
