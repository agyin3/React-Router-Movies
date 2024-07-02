import { combineReducers } from 'redux';

function balanceReducer(state = 123123123123, action) {
  switch(action.type) {
    case ('DEPOSIT'):
      return state + action.payload;
    case ('WITHDRAWL'):
      return state - action.payload;
    default:
      return state;
  }
}

function messageOfTheDayReducer(state = 'hello cs5', action) {
  switch(action.type) {
    case ('ADD_TO_MESSAGE'):
      return state + action.payload;
    case ('NEW_MESSAGE'):
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  balance: balanceReducer,
  motd: messageOfTheDayReducer,
});

export default rootReducer;
