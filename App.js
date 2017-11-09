import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from './src/components/Home.js';


export default class App extends React.Component {
  render() {
    return (
      <Home />
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
