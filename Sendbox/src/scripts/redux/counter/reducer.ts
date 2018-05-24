import * as actions from './actions';
import { ICounterState } from './types';

const initialState: ICounterState = {
  value: 0
};

export default function reducer(state: ICounterState = initialState, action: actions.Actions): ICounterState {

  switch (action.type) {
    case actions.INCREMENT_VALUE:
      return {...state, value: state.value + 1};

    case actions.DECREMENT_VALUE:
      return { ...state, value: state.value - 1 };

    case actions.RESET_VALUE:
      return { ...state, value: action.payload };
  }

  return state;
}
