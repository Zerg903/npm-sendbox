import { AsyncStatus } from '../../models/async';
import { User } from '../../models/domains';

// State
// ---------------------------

export type IUsersState = {
  items: User[],
  asyncStatus: AsyncStatus
};

export const initialUsersState: IUsersState = {
  asyncStatus: AsyncStatus.undefined,
  items: []
};