import * as React from 'react';
import Counter from './counter';
import { connect } from 'react-redux';
import { IState } from '../redux/store';

export type MapProps = {
  label: string
};

const Component: React.SFC<MapProps> = (props: MapProps) => {
  return (
    <div>
      <h2>{props.label}</h2>
      <Counter />
    </div>
  );
};

function mapProps(state: IState): MapProps {
  return {
    label: state.label,
  };
}

export default connect<MapProps>(mapProps)(Component);
