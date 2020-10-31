/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import MainScreen from './src/screens/MainScreen';
import Form from './src/components/Form';
import Filter from './src/components/Filter';
import Box from './src/components/Box';
import Word from './src/components/Word';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const defaultStore = {
  words: [
    {id: 1, en: 'One', vn: 'Một', isMemorized: false},
    {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
    {id: 3, en: 'Three', vn: 'Ba', isMemorized: true},
    {id: 4, en: 'Four', vn: 'Bon', isMemorized: true},
    {id: 5, en: 'Five', vn: 'Nam', isMemorized: false},
  ],
  shouldShowForm: true,
  filterMode: null,
};
const store = createStore((state = defaultStore, action) => {
  return state;
});

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
