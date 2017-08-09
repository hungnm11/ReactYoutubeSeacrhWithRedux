import { combineReducers } from 'redux';
import searchReducer from './reducer_search';
import keywordReducer from './reducer_keyword';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  keyword: keywordReducer,
  search: searchReducer
});

export default rootReducer;
