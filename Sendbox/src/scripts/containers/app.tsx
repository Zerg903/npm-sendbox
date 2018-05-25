import * as React from 'react';
import Counter from './counter';
import Users from './users';
import { connect } from 'react-redux';
import { IAppState } from '../redux/store';

export type ComponentProps = {
  label: string
};

const Component: React.SFC<ComponentProps> = (props) => {
  return (
    <div>
      <h1>{props.label}</h1>
      <h2>Counter</h2>
      <Counter />
      <h2>Users</h2>
      <Users />
    </div>
  );
};

function mapStateToProps(state: IAppState): ComponentProps {
  return {
    label: state.label,
  };
}

export default connect(mapStateToProps)(Component);
