import {combineReducers} from 'redux';
import wordReducer from './wordReducer';
import filterModeReducer from './filterModeReducer';
import shouldShowFormReducer from './shouldShowFormReducer';
const reducer = combineReducers({
  words: wordReducer,
  shouldShowForm: shouldShowFormReducer,
  filterMode: filterModeReducer,
});
export default reducer;
