import { ActionUnion, createAction } from '../../lib/action-helpers';
import { AsyncStatus } from '../../lib/async-helpers';
import { Dispatch } from 'react-redux';
import { fetchUsersAsync } from '../../services/api';
import { IAppState } from '../store';
import { User } from '../../models/domains';

export const FETCHING_USERS = 'users/FETCHING_USERS';
export const FETCHED_USERS = 'users/FETCHED_USERS';

// action creators
export const Actions = {
  fetching: (asyncStatus: AsyncStatus) => createAction(FETCHING_USERS, { asyncStatus }),
  fetched: (asyncStatus: AsyncStatus, items: User[] = null) => createAction(FETCHED_USERS, { asyncStatus, items })
};

// action creator types
export type Actions = ActionUnion<typeof Actions>;

// action creator functions (business logic)
export const Functions = {
  fetching() {
    return (dispatch: Dispatch<Actions>, getState: () => IAppState) => {

      const { counter } = getState();

      dispatch(Actions.fetching(AsyncStatus.fetching));
      fetchUsers(dispatch, counter.value);
    };
  },

  fetchWithError() {
    return (dispatch: Dispatch<Actions>, getState: () => IAppState) => {

      const { counter } = getState();

      dispatch(Actions.fetching(AsyncStatus.fetching));
      fetchUsers(dispatch, counter.value, true);
    };
  }
};

function fetchUsers(dispatch: Dispatch<Actions>, quantity: number, throwError: boolean = false) {

  fetchUsersAsync(quantity, throwError)
    .then(users => {
      dispatch(Actions.fetched(AsyncStatus.success, users));
    })
    .catch((error: Error) => {

      // tslint:disable-next-line:no-console
      console.log(error);

      dispatch(Actions.fetched(AsyncStatus.error));
    });
}
