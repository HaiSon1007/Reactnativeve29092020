import actionType from './actionTypes';

function setFilterMode(filterMode) {
  return {type: actionType.ACTION_TYPE_SET_FILTER_MODE, filterMode};
}

function toggleWord(id) {
  return {type: actionType.ACTION_TYPE_TOGGLE_WORD, id};
}

function removeWord(id) {
  return {type: actionType.ACTION_TYPE_REMOVE_WORD, id};
}

function addWord(word) {
  return {type: actionType.ACTION_TYPE_ADD_WORD, word};
}

function toggleForm() {
  return {type: actionType.ACTION_TYPE_TOGGLE_FORM};
}

export default {
  setFilterMode,
  toggleWord,
  removeWord,
  addWord,
  toggleForm,
};
