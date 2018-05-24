
import { Component, Props } from '../components/app';
import { connect } from 'react-redux';
import { IState } from '../redux/store';

type MapProps = {
  label: string;
};

function mapProps(state: IState): MapProps {
  return {
    label: state.label,
  };
}

export default connect<MapProps>(mapProps)(Component);
