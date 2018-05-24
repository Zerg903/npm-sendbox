import * as counter from '../redux/counter/actions';
import { Component, Props } from '../components/counter';
import { connect, Dispatch } from 'react-redux';
import { IState } from '../redux/store';

// TODO: Подумать над доработками типизации:
// 1) Получение MapProps путем объеденения свойств Props и state.counter
// 2) Получение MapEvents путем объеденения событий Props и state.counter

type MapProps = {
  value: number;
};

function mapProps(state: IState): MapProps {
  return {
    value: state.counter.value,
  };
}

type MapEvents = {
  onDecrement: () => void;
  onIncrement: () => void;
  onReset: () => void;
};

function mapEvents(dispatch: Dispatch<counter.Actions>): MapEvents {
  return {
    onDecrement: () => dispatch(counter.Actions.decrement()),
    onIncrement: () => dispatch(counter.Actions.increment()),
    onReset: () => dispatch(counter.Actions.reset(10)),
  };
}

export default connect<MapProps>(mapProps, mapEvents)(Component);