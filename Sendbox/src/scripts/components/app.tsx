
import * as React from 'react';

export type Props = {
  label: string
};

export const Component: React.SFC<Props> = (props: Props) => {
  return (
    <h2>{props.label}</h2>
  );
};