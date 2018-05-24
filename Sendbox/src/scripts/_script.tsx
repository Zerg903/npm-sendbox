
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createAppStore } from './redux/store';
import App from './containers/app';

const store = createAppStore();
const element = <Provider store={store}><App /></Provider>;

ReactDOM.render(element, document.getElementById('app-root'));