/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Word from '../components/Word';
import Form from '../components/Form';
import Filter from '../components/Filter';

export default class MainScreen extends Component {
  onToggleWord = word => {
    const newWords = this.state.words.map(item => {
      if (item.id === word.id) {
        return {...item, isMemorized: !item.isMemorized};
      }
      return item;
    });
    this.setState({words: newWords});
  };
  onRemoveWord = word => {
    const newWords = this.state.words.filter(item => {
      if (item.id === word.id) {
        return false;
      }
      return true;
    });
    this.setState({words: newWords});
  };
  onToggleForm = () => {
    this.setState({shouldShowForm: !this.state.shouldShowForm});
  };
  onAddWord = (txtEn, txtVn) => {
    const {words} = this.state;
    const newWords = Object.assign([], words);
    const newWord = {
      id: words.length + 1,
      en: txtEn,
      vn: txtVn,
      isMemorized: false,
    };
    newWords.unshift(newWord);
    this.setState({words: newWords});
  };
  onSetFilterMode = filterMode => {
    this.setState({filterMode});
  };
  render() {
    return (
      <View style={styles.container}>
        <Form />
        {/* <Filter
          onSetFilterMode={this.onSetFilterMode}
          filterMode={this.state.filterMode}
        />
        <Word
          onToggleWord={this.onToggleWord}
          onRemoveWord={this.onRemoveWord}
          filterMode={this.state.filterMode}
          data={this.state.words}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    height: 60,
    fontSize: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  touchableAddword: {
    backgroundColor: '#218838',
    padding: 15,
    borderRadius: 10,
  },
  textTouchable: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  touchableCancel: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
  },
  buttonOpenForm: {
    marginHorizontal: 10,
    height: 50,
    backgroundColor: '#45B157',
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOpenForm: {
    color: 'white',
    fontSize: 30,
  },
  containerTouchableForm: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  containerPickerStyle: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: 'black',
    padding: 20,
    marginHorizontal: 10,
  },
  pickerStyle: {
    padding: 50,
  },
});
