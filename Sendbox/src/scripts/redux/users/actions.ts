import { ActionUnion, createAction } from '../../lib/action-helpers';
import { AsyncStatus } from '../../models/async';
import { Dispatch } from 'react-redux';
import { fetchUsersAsync } from '../../services/api';
import { IAppState } from '../store';
import { User } from '../../models/domains';

export const LIST_FETCHING = 'users/LIST_FETCHING';
export const LIST_FETCHED_SUCCESS = 'users/LIST_FETCHED_SUCCESS';
export const LIST_FETCHED_ERROR = 'users/LIST_FETCHED_ERROR';

// action creators
export const Actions = {
  fetching: (asyncStatus: AsyncStatus) => createAction(LIST_FETCHING, { asyncStatus }),
  fetchedSuccess: (items: User[] = null) => createAction(LIST_FETCHED_SUCCESS, { items }),
  fetchedError: () => createAction(LIST_FETCHED_ERROR)
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
      dispatch(Actions.fetchedSuccess(users));
    })
    .catch((error: Error) => {

      // tslint:disable-next-line:no-console
      console.log(error);

      dispatch(Actions.fetchedError());
    });
}
