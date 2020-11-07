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
function shouldShowFormReducer(state = false, action) {
  if (action.type === 'TOGGLE_FORM') {
    return !state;
  }
  return state;
}
function filterModeReducer(state = null, action) {
  if (action.type === 'SET_FILTER_MODE') {
    return action.filterMode;
  }
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
