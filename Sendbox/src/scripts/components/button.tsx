import * as React from 'react';

export type ComponentProps = {
  text: string,
  className?: string;
};

export type ComponentEvents = {
  onClick?: () => void;
};

export const Component: React.SFC<ComponentProps & ComponentEvents> = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>{props.text}</button>
  );
};

export default Component;