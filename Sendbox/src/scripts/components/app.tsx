
import * as React from 'react';
import Counter from './counter';

export type Props = {
  label: string
};

export const Component: React.SFC<Props> = (props: Props) => {
  return (
    <div>
      <h2>{props.label}</h2>
      <Counter value={10} />
    </div>
  );
};

export default Component;