import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './components/common/ErrorBoundary.jsx';
import 'bootstrap';
import './components/styles/index.scss';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './components/routes.js';
import {
  createStore,
  applyMiddleware
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  blacklist: ['offset', 'requesting', 'postings', 'selectedPost'],
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(thunk);
const store = createStore(persistedReducer, middleware);
let persistor = persistStore(store);

ReactDOM.render(
  <Provider store = {store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Fragment>
          <ErrorBoundary>
            {renderRoutes(Routes)}
          </ErrorBoundary>
        </Fragment>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
