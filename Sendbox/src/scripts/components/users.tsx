import * as React from 'react';
import Button from './button';
import UsersList from './users-list';
import { AsyncStatus } from '../models/async';
import { User } from '../models/domains';

export type ComponentProps = {
  users: User[],
  asyncStatus: AsyncStatus,
};

export type ComponentEvents = {
  onFetch?: () => void,
  onFetchWithError?: () => void
};

export const Component: React.SFC<ComponentProps & ComponentEvents> = (props) => {

  let message;

  switch (props.asyncStatus) {
    case AsyncStatus.undefined:
      message = <span>Do you still think what to do?</span>;
      break;
    case AsyncStatus.fetching:
      message = <span>Fetching data from the server...</span>;
      break;
    case AsyncStatus.success:
      message = <span className="txt-success">Enjoy the result!</span>;
      break;
    case AsyncStatus.error:
      message = <span className="txt-danger">Hell, there's a mistake again ...</span>;
      break;
  }

  return (
    <div className="users">
      <div className="text-block users_toolbar">
        <Button className="" text="Fetch" onClick={props.onFetch} />
        <Button className="" text="Fetch (with error)" onClick={props.onFetchWithError} />
      </div>
      <div className="text-block users_message">
        {message}
      </div>
      <div className="text-block users_items">
        <UsersList users={props.users} fetching={props.asyncStatus === AsyncStatus.fetching} />
      </div>
    </div>
  );
};

export default Component;