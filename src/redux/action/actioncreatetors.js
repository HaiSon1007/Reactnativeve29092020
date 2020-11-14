import actionType from './actionTypes';

function setFilterMode(filterMode) {
  return {type: actionType.ACTION_TYPE_SET_FILTER_MODE, filterMode};
}

function toggleWord(id) {
  return {type: actionType.ACTION_TYPE_TOGGLE_WORD, id};
}

export default {
  setFilterMode,
  toggleWord,
};
