import * as actionTypes from '../Shopping/types';

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID
    },
  };
};

export const emptyCart = () => {
  return {
    type: actionTypes.EMPTY_CART,
  };
};