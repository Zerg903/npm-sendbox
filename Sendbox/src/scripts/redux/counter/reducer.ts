import * as actions from './actions';
import { Action } from 'redux';
import { ICounterState } from './types';

export function reducer(state: ICounterState, action: Action<string>): ICounterState;
export function reducer(state: ICounterState, action: actions.Actions): ICounterState {

  switch (action.type) {
    case actions.INCREMENT_VALUE:
      return { ...state, value: state.value + 1 };

    case actions.DECREMENT_VALUE:
      return { ...state, value: state.value - 1 };

    case actions.RESET_VALUE:
      return { ...state, value: action.payload };
  }

  return state;
}