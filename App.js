import React from 'react';
import HomeScreen from './screens/home';
import DetailsScreen from './screens/details';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default function App() {
  return (
    <AppContainer/>
  );
}

const AppContainer = createAppContainer(stackNavigator)

const stackNavigator = createStackNavigator({
  Home: {screen: HomeScreen,
  navigationOptions: {
  headerShown: false
}},
  Details: {screen: DetailsScreen}
}, {
  initialRouteName: 'Home'
});