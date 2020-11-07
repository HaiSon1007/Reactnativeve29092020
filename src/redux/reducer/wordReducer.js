const defaultWords = [
  {id: 1, en: 'One', vn: 'Một', isMemorized: false},
  {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
  {id: 3, en: 'Three', vn: 'Ba', isMemorized: true},
  {id: 4, en: 'Four', vn: 'Bon', isMemorized: true},
  {id: 5, en: 'Five', vn: 'Nam', isMemorized: false},
];
export default function wordReducer(state = defaultWords, action) {
  if (action.type === 'TOGGLE_WORD') {
    const newWords = state.map(item => {
      if (item.id === action.id) {
        return {...item, isMemorized: !item.isMemorized};
      }
      return item;
    });
    return newWords;
  }
  if (action.type === 'REMOVE_WORD') {
    const newWords = state.filter(item => {
      if (item.id === action.id) {
        return false;
      }
      return true;
    });
    return newWords;
  }
  if (action.type === 'ADD_WORD') {
    const newWords = Object.assign([], state);
    newWords.unshift(action.word);
    return newWords;
  }
  return state;
}
