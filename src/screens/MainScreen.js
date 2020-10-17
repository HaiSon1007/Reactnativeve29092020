/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AppDimensions from '../utils/AppDimensions';

export default class MainScreen extends Component {
  wordCheckMemorized = word => {
    if (word.isMemorized) {
      return '----';
    } else {
      return word.vn;
    }
  };
  render() {
    const word = {en: 'One', vn: 'Một', isMemorized: true};
    return (
      <View
        style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Text
          style={{color: '#28a845', fontSize: AppDimensions.getWidth() / 20}}>
          {word.en}
        </Text>
        <Text
          style={{color: '#dd3545', fontSize: AppDimensions.getWidth() / 20}}>
          {this.wordCheckMemorized(word)}
        </Text>
      </View>
    );
  }
}
