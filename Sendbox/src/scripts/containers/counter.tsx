import * as counter from '../redux/counter/actions';
import { Component, ComponentEvents, ComponentProps } from '../components/counter';
import { connect, Dispatch } from 'react-redux';
import { IState } from '../redux/store';

function mapStateToProps(state: IState): ComponentProps {
  return {
    value: state.counter.value,
  };
}

function mapDispatchToProps(dispatch: Dispatch<counter.Actions>): ComponentEvents {
  return {
    onDecrement: () => dispatch(counter.Actions.decrement()),
    onIncrement: () => dispatch(counter.Actions.increment()),
    // onReset: () => dispatch(counter.Actions.reset(10)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);