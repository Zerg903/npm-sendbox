import counter from './counter/reducer';
import users from './users/reducer';
import { Action } from 'redux';
import { combineReducers } from 'redux';

// Function combineReducers
// -----------------------------------

export default combineReducers({
  counter,
  users,
  // reducer для label необходим (by design combineReducers)!
  label: createNoopReducer<string>('')
});

// Helpers
// -----------------------------------

function createNoopReducer<T>(initialValue: T) {
  return (state: T = initialValue, action: Action) => {
    return state;
  };
}