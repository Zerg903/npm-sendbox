
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';

// Typed store
// -----------------------------------

export interface IState {
  readonly label: string;
}

// Function createAppStore
// -----------------------------------

export function createAppStore() {

  const initialState: IState = {
    label: 'Welcome to React!'
  };

  return createStore(
    reducer,
    initialState,
    applyMiddleware(logger)
  );
}
