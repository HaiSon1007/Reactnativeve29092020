/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
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
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.textEn}>{word.en}</Text>
          <Text style={styles.textVn}>{this.wordCheckMemorized(word)}</Text>
        </View>
        <View style={styles.containerTouchable}>
          <TouchableOpacity style={styles.touchableMemorized}>
            <Text style={styles.textSize}>isMemorized</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableRemove}>
            <Text style={styles.textSize}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: AppDimensions.getHeight() / 7,
    justifyContent: 'space-evenly',
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textEn: {
    color: '#28a845',
    fontSize: AppDimensions.getWidth() / 20,
  },
  textVn: {
    color: '#dd3545',
    fontSize: AppDimensions.getWidth() / 20,
  },
  containerTouchable: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  touchableMemorized: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#28a845',
  },
  textSize: {
    fontSize: AppDimensions.getWidth() / 20,
  },
  touchableRemove: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFC106',
  },
});
