
import * as React from 'react';

export type Props = {
  text: string,
  className?: string;
  onClick?: () => void;
};

export const Component: React.SFC<Props> = (props: Props) => {
  return (
    <button className={props.className} onClick={props.onClick}>{props.text}</button>
  );
};

export default Component;