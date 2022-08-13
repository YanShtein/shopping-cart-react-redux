import * as actionTypes from './types';

export const validateAddress = () => {
  return {
    type: actionTypes.VALIDATE_ADDRESS,
  };
};

export const validatePhone = () => {
  return {
    type: actionTypes.VALIDATE_PHONE,
  };
};
