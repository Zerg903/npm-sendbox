import * as React from 'react';
import { AsyncStatus } from '../lib/async-helpers';
import { User } from '../models/domains';

export type ComponentProps = {
  users: User[],
  fetching: boolean
};

export const Component: React.SFC<ComponentProps> = (props) => {

  const users = props.users || [];

  if (users.length === 0) {

    return <p>Need to fetch list of users! Now!</p>;

  } else {

    const className = 'users' + (props.fetching ? ' users__fetching' : '');

    return (
      <div className={className}>
        <ul>
          {
            users.map(user =>
              <li key={user.id} className="users_item">
                <img src={user.avatar} />
                <span>{user.firstName} {user.lastName}</span>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
};

export default Component;