import React from 'react';
import {ScrollView, View} from 'react-native'

import { RobotoText } from '../components/StyledText';
import MeButton  from '../components/buttons/MeButton';

export default function SettingsScreen() {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#efefef'}}>
      <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 250,}}>
        <RobotoText style={{fontSize: 17, color: '#ccc'}}>Settings Screen</RobotoText>
      </View>  
    </ScrollView>
  )
}

SettingsScreen.navigationOptions = ({navigation}) => ({
  headerTitle: () => 
    <RobotoText 
      font='bold' 
      style={{
        fontSize: 28,
        lineHeight: 40,
        textAlign: 'left',
        position: 'absolute',
        left:0,
      }}>Settings</RobotoText>,

  headerLeft: () => <MeButton 
    profilePic={require('../assets/images/profile-pic-placeholder.png')}
    onPress={() => navigation.navigate('AuthStack')}
  />,

  headerStyle: {
    height: 60,
    backgroundColor: '#fff',
    borderBottomWidth: 0,
  },
});
