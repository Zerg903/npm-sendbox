import * as counter from '../redux/counter/actions';
import { Component, ComponentEvents, ComponentProps } from '../components/counter';
import { connect, Dispatch } from 'react-redux';
import { IAppState } from '../redux/store';

function mapStateToProps(state: IAppState): ComponentProps {
  return {
    value: state.counter.value,
  };
}

function mapDispatchToProps(dispatch: Dispatch<counter.Actions>): ComponentEvents {
  return {
    onDecrement: () => dispatch(counter.Functions.decrement()),
    onIncrement: () => dispatch(counter.Functions.increment()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);