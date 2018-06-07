import React, {Fragment} from 'react';
import { renderRoutes } from 'react-router-config';

const AppRoot = (props) => {
  return (
    <Fragment>
      {renderRoutes(props.route.routes)}
    </Fragment>
  );
};

export default AppRoot;
