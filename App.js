/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import MainScreen from './src/screens/MainScreen';
import Form from './src/components/Form';
import Filter from './src/components/Filter';
import Box from './src/components/Box';
import Word from './src/components/Word';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const defaultWords = [
  {id: 1, en: 'One', vn: 'Một', isMemorized: false},
  {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
  {id: 3, en: 'Three', vn: 'Ba', isMemorized: true},
  {id: 4, en: 'Four', vn: 'Bon', isMemorized: true},
  {id: 5, en: 'Five', vn: 'Nam', isMemorized: false},
];
function wordReducer(state = defaultWords, action) {
  return state;
}
function shouldShowFormReducer(state = false, action) {
  return state;
}
function filterModeReducer(state = null, action) {
  return state;
}

const rootReducer = combineReducers({
  words: wordReducer,
  shouldShowForm: shouldShowFormReducer,
  filterMode: filterModeReducer,
});

const store = createStore(rootReducer);

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Provider store={store}>
          <MainScreen />
        </Provider>
      </SafeAreaView>
    );
  }
}

// if (action.type === 'TOGGLE_WORD') {
//   const newWords = state.words.map(item => {
//     if (item.id === action.id) {
//       return {...item, isMemorized: !item.isMemorized};
//     }
//     return item;
//   });
//   return {...state, words: newWords};
// }
// if (action.type === 'REMOVE_WORD') {
//   const newWords = state.words.filter(item => {
//     if (item.id === action.id) {
//       return false;
//     }
//     return true;
//   });
//   return {...state, words: newWords};
// }
// if (action.type === 'TOGGLE_FORM') {
//   return {...state, shouldShowForm: !state.shouldShowForm};
// }
// if (action.type === 'ADD_WORD') {
//   const {words} = state;
//   const newWords = Object.assign([], words);
//   newWords.unshift(action.word);
//   return {...state, words: newWords};
// }
// if (action.type === 'SET_FILTER_MODE') {
//   return {...state, filterMode: action.filterMode};
// }
// return state;
