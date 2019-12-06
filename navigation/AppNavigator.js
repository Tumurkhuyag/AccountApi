import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import InsertEmailScreen from '../screens/InsertEmailScreen';
import SignUpNameScreen from '../screens/SignUpNameScreen';

const AuthStack = createStackNavigator({
  InsertEmail: InsertEmailScreen,
  SignUpName: SignUpNameScreen,
})

const MainStack = createStackNavigator({
  MainTab: MainTabNavigator
})

export default createAppContainer(createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    
    // AuthLoading: AuthLoadingScreen,
    MainStack,
    AuthStack,
  },
  {
    initialRouteName: 'AuthStack'
  }
));