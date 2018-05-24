import * as React from 'react';
import Button from './button';

export type Props = {
  value: number,
  onDecrement?: () => void,
  onIncrement?: () => void
};

export const Component: React.SFC<Props> = (props: Props) => {
  return (
    <div className="counter">
      <Button className="counter_btn counter_btn__decrement" text="-"
        onClick={props.onDecrement} />
      <span className="counter_value">{props.value}</span>
      <Button className="counter_btn counter_btn__increment" text="+"
        onClick={props.onIncrement} />
    </div>
  );
};

export default Component;