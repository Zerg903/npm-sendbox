import { ActionUnion, createAction } from '../../lib/action-helpers';
import { Dispatch } from 'react-redux';
import { IAppState } from '../store';

export const DECREMENT_VALUE = 'counter/DECREMENT_VALUE';
export const INCREMENT_VALUE = 'counter/INCREMENT_VALUE';

export const COUNTER_MIN_VALUE = 1;
export const COUNTER_MAX_VALUE = 12;

// action creators
export const Actions = {
  decrement: () => createAction(DECREMENT_VALUE),
  increment: () => createAction(INCREMENT_VALUE)
};

// action creator types
export type Actions = ActionUnion<typeof Actions>;

// action creator functions (business logic)
export const Functions = {

  decrement() {
    return (dispatch: Dispatch<Actions>, getState: () => IAppState) => {

      const { counter } = getState();

      if (counter.value <= COUNTER_MIN_VALUE) {
        return;
      }

      dispatch(Actions.decrement());
    };
  },

  increment() {
    return (dispatch: Dispatch<Actions>, getState: () => IAppState) => {
      const { counter } = getState();

      if (counter.value >= COUNTER_MAX_VALUE) {
        return;
      }

      dispatch(Actions.increment());
    };
  }
};