import * as actionTypes from './types';

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

export const Search = (searchVal) => {
  return {
    type: actionTypes.SEARCH,
    payload: {
      searchVal: searchVal,
    },
  };
};