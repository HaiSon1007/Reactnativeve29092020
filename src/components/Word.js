/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import WordItem from './WordItem';

export default class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        {id: 1, en: 'One', vn: 'Một', isMemorized: false},
        {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
        {id: 3, en: 'Three', vn: 'Ba', isMemorized: true},
        {id: 4, en: 'Four', vn: 'Bon', isMemorized: true},
        {id: 5, en: 'Five', vn: 'Nam', isMemorized: false},
      ],
    };
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <FlatList
          data={this.state.words}
          extraData={this.state.words}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({item}) => <WordItem item={item} />}
        />
      </View>
    );
  }
}
