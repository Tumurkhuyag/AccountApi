import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import InsertEmailScreen from '../screens/InsertEmailScreen';
import SignUpNameScreen from '../screens/SignUpNameScreen';
import SignUpPasswordScreen from '../screens/SignUpPasswordScreen';
import SignUpAgreementScreen from '../screens/SignUpAgreementScreen';
import SignUpEmailAuthScreen from '../screens/SignUpEmailAuthScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import LoginScreen from '../screens/LoginScreen';

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  InsertEmail: InsertEmailScreen,
  SignUpName: SignUpNameScreen,
  SignUpPassword: SignUpPasswordScreen,
  SignUpAgreement: SignUpAgreementScreen,
  SignUpEmailAuth: SignUpEmailAuthScreen,
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#efefef',
    }
  }
}
)

const ProfileStack = createStackNavigator({
  MyProfile: MyProfileScreen, 
})

const MainStack = createStackNavigator({
  MainTab: MainTabNavigator,
  Profile: ProfileStack,
},
{
  defaultNavigationOptions: {
    header: null,
  }
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
  },
  
));