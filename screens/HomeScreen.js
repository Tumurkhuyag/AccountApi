import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';

import MeButton  from '../components/buttons/MeButton';
import { RobotoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
      <ScrollView style={{flex: 1, backgroundColor: '#efefef'}}>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 250,}}>
          <RobotoText style={{fontSize: 17, color: '#ccc'}}>Home Screen</RobotoText>
        </View>  
      </ScrollView>
  );
}

HomeScreen.navigationOptions = ({navigation}) => ({
  headerTitle: () => 
    <RobotoText 
      font='bold' 
      style={{
        fontSize: 28,
        lineHeight: 40,
        textAlign: 'left',
        position: 'absolute',
        left:0,
      }}>Home</RobotoText>,

  headerLeft: () => <MeButton 
    profilePic={require('../assets/images/profile-pic-placeholder.png')}
    onPress={() => navigation.navigate('Profile')}
  />,

  headerStyle: {
    height: 60,
    backgroundColor: '#fff',
    borderBottomWidth: 0,
  },
});