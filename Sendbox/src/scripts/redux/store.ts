import logger from 'redux-logger';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { AsyncStatus } from '../lib/async-helpers';
import { ICounterState, initialCounterState } from './counter/types';
import { initialUsersState, IUsersState } from './users/types';

// Typed state
// -----------------------------------

export interface IAppState {
  readonly label: string;
  readonly counter: ICounterState;
  readonly users: IUsersState;
}

// Function createAppStore
// -----------------------------------

export function createAppStore() {

  const initialState: IAppState = {
    label: 'Welcome to React!',
    counter: initialCounterState,
    users: initialUsersState
  };

  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunk, logger)
  );
}
