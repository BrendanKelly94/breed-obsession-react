import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import { renderRoutes } from 'react-router-config';
import Routes from './routes.js';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          {renderRoutes(Routes)}
        </div>
      </Router>
    );
  }
}
export default App;
