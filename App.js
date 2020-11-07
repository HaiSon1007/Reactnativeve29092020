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
