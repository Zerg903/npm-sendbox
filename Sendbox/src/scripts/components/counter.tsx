
import * as React from 'react';
import Button from './button';

export type Props = {
  value: number
};

export const Component: React.SFC<Props> = (props: Props) => {
  return (
    <div className="counter">
      <Button className="counter_btn counter_btn__decrement" text="-" />
      <span className="counter_value">{props.value}</span>
      <Button className="counter_btn counter_btn__increment" text="+" />
    </div>
  );
};

export default Component;