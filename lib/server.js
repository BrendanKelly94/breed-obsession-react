require('dotenv').config();
import express from 'express';
import config from './config';
// import React from 'react';
//
// import { renderToString } from 'react-dom/server';
// import StaticRouter from 'react-router-dom/StaticRouter';
// import { renderRoutes } from 'react-router-config';
// import Routes from './components/routes.js';
//
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import reducers from './reducers.js';
//
// const store = createStore(reducers, applyMiddleware(thunk));

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

// app.get('*', (req, res) => {
//
//   if(req.url === '/keys'){
//     res.json({'petKey': process.env.PET_FINDER_KEY, 'cityKey': process.env.WORLD_CITIES_KEY});
//   }else{
//
//     let context = {};
//     const content = renderToString(
//       <Provider store = {store}>
//         <StaticRouter location={req.url} context={context}>
//           {renderRoutes(Routes)}
//         </StaticRouter>
//       </Provider>
//     );
//
//     res.render('index', {title: 'Express', data: store.getState(), content });
//   }
//
// });

app.get('/', (req, res) => {
  res.render('index', {data: 'hi'});
});

app.get('/postings', (req, res) => {
  res.sendfile('public/index.html');
});

app.get('/keys', (req, res) => {
  res.json({'petKey': process.env.PET_FINDER_KEY, 'cityKey': process.env.WORLD_CITIES_KEY});
});

app.listen(config.port, function isRunning(){
  console.info(`Running on ${config.port}`);
});
