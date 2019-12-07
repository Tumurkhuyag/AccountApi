import React from 'react';
import { ScrollView, TouchableOpacity, View, Image, } from 'react-native';

import { RobotoText } from '../components/StyledText';
import FontIcon from '../components/icons/FontIcon';
import SectionTitle from '../components/SectionTitle';
import BackButton from '../components/buttons/BackButton';
import ProfileListItem from '../components/ProfileListItem';

export default function MyProfileScreen({navigation}) {
  return (
    <ScrollView style={{flex: 1, flexDirection: 'column', marginHorizontal: 20,}}>
        <View style={{marginVertical: 20,}}>
            <SectionTitle title='Profile Picture' text='Edit'/>
            <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Image
                    source={require('../assets/images/profile-pic-placeholder.png')}
                    style={{height: 100, width: 100,}}
                />
            </TouchableOpacity>
        </View>

        <View style={{marginVertical: 20,}}>
            <SectionTitle title='Personal Information'/>
            <ProfileListItem title='Name' caption='Tumurkhuyag'/>
            <ProfileListItem title='Email Address' caption='tomor.enkh@gmail.com'/>
        </View>

        <View style={{marginVertical: 20,}}>
            <SectionTitle title='Security and Login'/>
            <ProfileListItem title='Change password' caption='●●●●●●●●●●'/>
        </View>
    </ScrollView>
  );
}

MyProfileScreen.navigationOptions = ({navigation}) => ({
    headerTitle: () => <RobotoText font='medium' style={{fontSize: 17}}>My Profile</RobotoText>,
    headerLeft: () => <BackButton onPress={() => navigation.navigate('MainTab')} />,
});