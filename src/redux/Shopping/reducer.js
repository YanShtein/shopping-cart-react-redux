import * as actionTypes from '../Shopping/types';
import { data } from '../../data';

const INITIAL_STATE = {
  products: data,
  cart: [],
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.ADD_TO_CART:
      // get items data from products array
      const item = state.products.find(prod => prod.id === action.payload.id);
      // check if item is in cart already
      const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false);
      // spread the state, as objects are reference types and we need to mutate them correctly else we can loose the state etc.
      return {
        ...state, //spread the state so we dont want to mutate any objects
        cart: inCart // if object is inCart - if its true..than map through the cart and find that item id, spread that item data inside, and add quantity
          ? state.cart.map(item => 
              item.id === action.payload.id
              ? {...item, quantity: item.quantity + 1} 
              : item
            )
            // else spread state cart array, and to that item assign quantity to 1
          : [...state.cart, {...item, quantity: 1}],
      };
    case actionTypes.REMOVE_FROM_CART:
      let index = state.cart.findIndex(item => item.id === action.payload.id)
      if (state.cart[index].quantity === 1) {
        return {
          ...state,
          cart: [
            ...state.cart.slice(0, index),
            ...state.cart.slice(index + 1)
          ]
        };
      };
      return {
        ...state,
        cart: 
          state.cart.map(item => 
            item.id === action.payload.id
            ? {...item, quantity: item.quantity - 1} 
            : item
          )
      };
    case actionTypes.SEARCH:
      const {value} = action;
      let filteredData = state.products.filter(item => item.includes(value));
      return {
        ...state, value, filteredData
      };
    case actionTypes.EMPTY_CART:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default shopReducer;