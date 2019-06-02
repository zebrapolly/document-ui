import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore';

const initStore = {
  documents: {
    isFetching: false,
    error: null,
    data: []
  }
} 

const store = configureStore(initStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
