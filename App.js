import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  AppRegistry
} from 'react-native';
import {
  StackNavigator, 
  TabNavigator, 
  DrawerNavigator
} from 'react-navigation';
import RootRooter from './src/RootRooter.js';


export default class App extends React.Component {
  render() {
    return (
      <RootRooter />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('App', () => App);