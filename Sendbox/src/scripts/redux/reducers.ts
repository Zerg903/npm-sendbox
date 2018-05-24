import counter from './counter/reducer';
import { combineReducers } from 'redux';

// Function combineReducers
// -----------------------------------

export default combineReducers({
  counter,
  // reducer для label необходим (by design combineReducers)!
  label: createNoopReducer<string>('')
});

// Helpers
// -----------------------------------

function createNoopReducer<T>(initialValue: T) {
  return (state: T = initialValue, action) => {
    return state;
  };
}