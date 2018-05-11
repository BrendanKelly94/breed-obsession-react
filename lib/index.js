import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import logger from 'redux-logger';

import thunk from 'redux-thunk';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import { renderRoutes } from 'react-router-config';
import Routes from './components//routes.js';

import {
  createStore,
  applyMiddleware
} from 'redux';

import rootReducer from './reducers';

const middleware = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware);

ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <div>
        {renderRoutes(Routes)}
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
