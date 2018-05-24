import logger from 'redux-logger';
import reducer from './reducers';
import { applyMiddleware, createStore } from 'redux';
import { ICounterState } from './counter/types';

// Typed store
// -----------------------------------

export interface IState {
  readonly label: string;
  readonly counter: ICounterState;
}

// Function createAppStore
// -----------------------------------

export function createAppStore() {

  const initialState: IState = {
    label: 'Welcome to React!',
    counter: {
      value: 10
    }
  };

  return createStore(
    reducer,
    initialState,
    applyMiddleware(logger)
  );
}
