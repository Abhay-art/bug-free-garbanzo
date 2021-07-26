import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import BookTransactionScreen from './screens/BookTransactionScreen'; 
import SearchScreen from './screens/SearchScreen';
export default class App extends React.Component {
  render(){
  return (
   <AppContainer/>
  );
}
}
const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:BookTransactionScreen},
  Search:{screen:SearchScreen}
})
const Appcontainer = createAppContainer(TabNavigator)