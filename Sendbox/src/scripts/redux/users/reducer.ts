import * as actions from './actions';
import { AsyncStatus } from '../../models/async';
import { initialUsersState, IUsersState } from './types';

export default function reducer(state: IUsersState = initialUsersState, action: actions.Actions): IUsersState {

  switch (action.type) {

    case actions.LIST_FETCHING: {
      return { ...state, asyncStatus: AsyncStatus.fetching };
    }

    case actions.LIST_FETCHED_SUCCESS: {
      const { items } = action.payload;
      return { ...state, asyncStatus: AsyncStatus.success, items };
    }

    case actions.LIST_FETCHED_ERROR: {
      return { ...state, asyncStatus: AsyncStatus.error };
    }
  }

  return state;
}
