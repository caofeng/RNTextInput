/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
} from 'react-native';

export default class RNTextInput extends Component {
  state = {
    text:''
  }
  compoentDidMount(){
  }

  render() {
    return (
      <View style={styles.container} ref='view'>
      <TextInput style = {styles.textinput}
      value={this.state.text}
      onChangeText={(text_)=>{
        this.setState({text:text_})
      }}
      onChange={()=>{
        // alert('输入改变')
        console.log('正在输入')
      }}
      editable={true}
      maxLength={1000}
      multiline = {true}
      autoCapitalize='words'
      autoFocus={false}
      blurOnSubmit={true}
      caretHidden={true}
      defaultValue='hahhaaha'
      keyboardType='default'
      // onBlur={()=>{
      //   alert('失去焦点')
      // }}
      onEndEditing={()=>{
        alert('结束编辑')
      }}
      // onFocus={()=>{
      //   console.log('获得焦点')
      // }}
      // onLayout={(e)=>{
      //   alert(e.nativeEvent.layout.height)
      // }}
      // onScroll={(e)=>{
      //   alert(e.nativeEvent.contentOffset.y)
      // }}
      // onSubmitEditing={()=>{
      // }}
      placeholder='placeholder'
      placeholderTextColor='#987654'
      returnKeyType='search'
      secureTextEntry={false}//单行
      selectionColor='red'
      />

      <TextInput style={styles.textinput}
      />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  textinput:{
    marginTop: 100,
    width: 300,
    height: 50,
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: 'white',
    fontSize: 20,
  }
});

AppRegistry.registerComponent('RNTextInput', () => RNTextInput);
