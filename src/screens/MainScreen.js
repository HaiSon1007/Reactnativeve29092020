/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import AppDimensions from '../utils/AppDimensions';
import Box from '../components/Box';

export default class MainScreen extends Component {
  render() {
    const words = [
      {id: 1, en: 'One', vn: 'Một', isMemorized: false},
      {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
      {id: 3, en: 'Three', vn: 'Ba', isMemorized: true},
      {id: 4, en: 'Four', vn: 'Bon', isMemorized: true},
      {id: 5, en: 'Five', vn: 'Nam', isMemorized: false},
    ];
    return (
      <View style={styles.container}>
        <Box />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerWord: {
    flexDirection: 'column',
    height: AppDimensions.getHeight() / 7,
    justifyContent: 'space-evenly',
    backgroundColor: '#F0F0F0',
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
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

/* 
{words.map(word => {
          return (
            <View style={styles.containerWord} key={word.id.toString()}>
              <View style={styles.containerText}>
                <Text style={styles.textEn}>{word.en}</Text>
                <Text style={styles.textVn}>
                  {word.isMemorized ? '----' : word.vn}
                </Text>
              </View>
              <View style={styles.containerTouchable}>
                <TouchableOpacity
                  style={{
                    ...styles.touchableMemorized,
                    backgroundColor: word.isMemorized ? '#DD3444' : '#28a845',
                  }}>
                  <Text style={styles.textSize}>
                    {word.isMemorized ? 'Memorized' : 'Forgot'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableRemove}>
                  <Text style={styles.textSize}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
*/