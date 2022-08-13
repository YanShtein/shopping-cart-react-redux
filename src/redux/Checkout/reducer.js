import * as actionTypes from './types';

const INITIAL_STATE = {

};

const checkoutReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.VALIDATE_ADDRESS:
      return {

      };
    case actionTypes.VALIDATE_PHONE:
      return {
        
      };
    default:
      return state
  }
};

export default checkoutReducer;