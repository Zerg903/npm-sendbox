import * as actions from './actions';
import { ICounterState, initialCounterState } from './types';

export default function reducer(state: ICounterState = initialCounterState, action: actions.Actions): ICounterState {

  switch (action.type) {

    case actions.INCREMENT_VALUE:
      return { ...state, value: state.value + 1 };

    case actions.DECREMENT_VALUE:
      return { ...state, value: state.value - 1 };
  }

  return state;
}
