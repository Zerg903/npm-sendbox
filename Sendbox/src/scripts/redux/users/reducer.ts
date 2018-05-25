import * as actions from './actions';
import { AsyncStatus } from '../../lib/async-helpers';
import { initialUsersState, IUsersState } from './types';

export default function reducer(state: IUsersState = initialUsersState, action: actions.Actions): IUsersState {

  switch (action.type) {

    case actions.FETCHING_USERS: {
      const { asyncStatus } = action.payload;
      return { ...state, asyncStatus };
    }

    case actions.FETCHED_USERS: {
      const { items, asyncStatus } = action.payload;
      return asyncStatus === AsyncStatus.success
        ? { ...state, asyncStatus, items }
        : { ...state, asyncStatus };
    }
  }

  return state;
}
