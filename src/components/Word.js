/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import WordItem from './WordItem';

export default class Word extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <FlatList
          data={this.props.data}
          extraData={this.props.data}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({item}) => (
            <WordItem
              onRemoveWord={this.props.onRemoveWord}
              onToggleWord={this.props.onToggleWord}
              item={item}
              filterMode={this.props.filterMode}
            />
          )}
        />
      </View>
    );
  }
}
