import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

//import Login from './src/pages/Login';
//import Signup from './src/pages/Signup';
import Routes from './src/Routes';

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='blue'
          barStyle="light-content"
          />
        
        <Routes/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    //alignItems:'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
