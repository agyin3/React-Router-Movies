export const DEPOSIT = 'DEPOSIT';
export const WITHDRAWL = 'WITHDRAWL';
export const ADD_TO_MESSAGE = 'ADD_TO_MESSAGE';
export const NEW_MESSAGE = 'NEW_MESSAGE';

export const depositMoney = (amount) => {
  return {
    type: DEPOSIT,
    payload: amount
  };
};

export const withdrawlMoney = (amount) => {
  return {
    type: WITHDRAWL,
    payload: amount
  };
};

export const addToMessage = (message) => {
  return {
    type: ADD_TO_MESSAGE,
    payload: message
  };
};

export const newMessage = (message) => {
  return {
    type: NEW_MESSAGE,
    payload: message
  };
};
