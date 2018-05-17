import { combineReducers } from 'redux';
import homeReducer from './components/home/duck/reducers';
import postingsReducer from './components/postings/duck/reducers';

const rootReducer = combineReducers({
  home: homeReducer,
  postings: postingsReducer,
});

export default rootReducer;
