import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import './components/styles/index.scss';

import { Provider } from 'react-redux';
import logger from 'redux-logger';
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
  blacklist: ['postings'],
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(thunk, logger);
const store = createStore(persistedReducer, middleware);
let persistor = persistStore(store);

ReactDOM.render(
  <Provider store = {store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <div>
          {renderRoutes(Routes)}
        </div>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
