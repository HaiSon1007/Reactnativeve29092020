/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import WordItem from './WordItem';
import {connect} from 'react-redux';

class Word extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <FlatList
          data={this.props.words}
          extraData={this.props.words}
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

const mapStateToProps = state => {
  return {filterMode: state.filterMode, words: state.words};
};
export default connect(mapStateToProps)(Word);
