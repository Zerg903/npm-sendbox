import * as counter from './counter/reducer';
import { Action } from 'redux';
import { IState } from './store';

export default function reducer(state: IState, action: Action<string>) {

  // TODO: механизм разрешения раздела следует оптимизировать!
  if (action.type.indexOf('counter/') === 0) {
    return { ...state, counter: counter.reducer(state.counter, action) };
  }

  return state;
}