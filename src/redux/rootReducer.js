import { combineReducers } from "redux";
import shopReducer from './Shopping/reducer';
import checkoutReducer from './Checkout/reducer';

const rootReducer = combineReducers({
  shop: shopReducer,
  checkout: checkoutReducer,
});

export default rootReducer;