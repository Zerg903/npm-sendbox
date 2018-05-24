import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Hello extends React.Component {
  public render() {
    return (
      <h2>Welcome to React!</h2>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('app-root'));