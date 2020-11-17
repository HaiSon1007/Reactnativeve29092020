export default function wordReducer(state = [], action) {
  if (action.type === 'FETCH_WORD') {
    return action.words;
  }
  if (action.type === 'TOGGLE_WORD') {
    const newWords = state.map(item => {
      if (item._id === action._id) {
        return action.word;
      }
      return item;
    });
    return newWords;
  }
  if (action.type === 'REMOVE_WORD') {
    const newWords = state.filter(item => {
      if (item._id === action._id) {
        return false;
      }
      return true;
    });
    return newWords;
  }
  if (action.type === 'ADD_WORD') {
    const newWords = Object.assign([], state);
    newWords.push(action.word);
    return newWords;
  }
  return state;
}
