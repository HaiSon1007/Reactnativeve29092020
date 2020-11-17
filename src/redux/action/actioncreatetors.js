import actionType from './actionTypes';
import axios from 'axios';

function setFilterMode(filterMode) {
  return {type: actionType.ACTION_TYPE_SET_FILTER_MODE, filterMode};
}

// {type: actionType.ACTION_TYPE_TOGGLE_WORD, _id}
function toggleWord(_id, isMemorized) {
  return dispatch => {
    axios
      .put(`https://servernode29092020.herokuapp.com/word/${_id}`, {
        isMemorized,
      })
      .then(response => {
        if (response.data.success) {
          dispatch({
            type: actionType.ACTION_TYPE_TOGGLE_WORD,
            _id,
            word: response.data.word,
          });
        }
      })
      .catch(error => console.log(error));
  };
}

function removeWord(_id) {
  return dispatch => {
    axios
      .delete(`https://servernode29092020.herokuapp.com/word/${_id}`)
      .then(response => {
        if (response.data.success) {
          dispatch({
            type: actionType.ACTION_TYPE_REMOVE_WORD,
            _id,
          });
        }
      })
      .catch(error => console.log(error));
  };
}

function addWord(en, vn) {
  return dispatch => {
    axios
      .post('https://servernode29092020.herokuapp.com/word', {en, vn})
      .then(response => {
        if (response.data.success) {
          dispatch({
            type: actionType.ACTION_TYPE_ADD_WORD,
            word: response.data.word,
          });
        }
      })
      .catch(error => console.log(error));
  };
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
