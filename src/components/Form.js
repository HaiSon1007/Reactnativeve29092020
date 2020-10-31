import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtEn: '',
      txtVn: '',
    };
  }
  addWord = () => {
    const {txtEn, txtVn} = this.state;
    if (txtEn.length <= 0 || txtVn.length <= 0) {
      return alert('Ban chưa nhập đủ thông tin');
    }
    this.props.onAddWord(txtEn, txtVn);
    this.setState({txtEn: '', txtVn: ''});
    this.textInputEn.clear();
    this.textInputVn.clear();
  };
  renderForm = shouldShowForm => {
    if (shouldShowForm) {
      return (
        <View>
          <View style={styles.containerTextInput}>
            <TextInput
              onChangeText={text => (this.state.txtEn = text)}
              ref={refs => (this.textInputEn = refs)}
              placeholder="English"
              style={styles.textInput}
            />
            <TextInput
              onChangeText={text => (this.state.txtVn = text)}
              ref={refs => (this.textInputVn = refs)}
              placeholder="Vietnamese"
              style={styles.textInput}
            />
          </View>
          <View style={styles.containerTouchable}>
            <TouchableOpacity
              onPress={this.addWord}
              style={styles.touchableAddword}>
              <Text style={styles.textTouchable}>Add word</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.onToggleForm()}
              style={styles.touchableCancel}>
              <Text style={styles.textTouchable}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => this.props.onToggleForm()}
          style={styles.buttonOpenForm}>
          <Text style={styles.textOpenForm}>+</Text>
        </TouchableOpacity>
      );
    }
  };
  render() {
    return this.renderForm(this.props.shouldShowForm);
  }
}

const mapStateToProps = state => {
  return {shouldShowForm: state.shouldShowForm};
};

export default connect(mapStateToProps)(Form);

const styles = StyleSheet.create({
  containerTextInput: {
    width: '100%',
    height: 150,
    justifyContent: 'space-evenly',
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
  containerTouchable: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
});
