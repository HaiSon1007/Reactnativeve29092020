/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import MainScreen from './src/screens/MainScreen';
import Form from './src/components/Form';
import Filter from './src/components/Filter';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <MainScreen />
        {/* <Form /> */}
        {/* <Filter /> */}
      </SafeAreaView>
    );
  }
}
