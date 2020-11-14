import actionType from './actionTypes';
import axios from 'axios';

function setFilterMode(filterMode) {
  return {type: actionType.ACTION_TYPE_SET_FILTER_MODE, filterMode};
}

function toggleWord(_id) {
  return {type: actionType.ACTION_TYPE_TOGGLE_WORD, _id};
}

function removeWord(_id) {
  return {type: actionType.ACTION_TYPE_REMOVE_WORD, _id};
}

function addWord(word) {
  return {type: actionType.ACTION_TYPE_ADD_WORD, word};
}

function toggleForm() {
  return {type: actionType.ACTION_TYPE_TOGGLE_FORM};
}

function fetchWord() {
  return dispatch => {
    axios
      .get('https://servernode29092020.herokuapp.com/word')
      .then(response =>
        dispatch({
          type: actionType.ACTION_TYPE_FETCH_WORD,
          words: response.data.words,
        }),
      )
      .catch(error => console.log(error));
  };
}

export default {
  setFilterMode,
  toggleWord,
  removeWord,
  addWord,
  toggleForm,
  fetchWord,
};
