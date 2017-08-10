import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import searchReducer from './reducer_search';
import keywordReducer from './reducer_keyword';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  keyword: keywordReducer,
  search: searchReducer,
  form: formReducer
});

export default rootReducer;
