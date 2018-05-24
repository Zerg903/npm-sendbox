import * as React from 'react';
import Counter from './counter';
import { connect } from 'react-redux';
import { IState } from '../redux/store';

export type ComponentProps = {
  label: string
};

const Component: React.SFC<ComponentProps> = (props) => {
  return (
    <div>
      <h2>{props.label}</h2>
      <Counter />
    </div>
  );
};

function mapProps(state: IState): ComponentProps {
  return {
    label: state.label,
  };
}

export default connect(mapProps)(Component);
