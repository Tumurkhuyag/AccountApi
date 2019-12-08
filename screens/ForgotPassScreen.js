import React from 'react';
import { KeyboardAvoidingView, View, Text, Button, } from 'react-native';

import { RobotoText } from '../components/StyledText';
import { CustomTextInput } from '../components/CustomTextInput';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { SecondaryButton } from '../components/buttons/SecondaryButton';
import BackButton from '../components/buttons/BackButton';

export default function ForgotPassScreen({navigation}) {
  return (
    <KeyboardAvoidingView behavior='padding' style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', marginHorizontal: 20,}}>
        <View>
            <View style={{marginTop: 25, marginBottom: 20,}}>
                <RobotoText font='regular' style={{fontSize: 17, color: '#000', textAlign: 'center'}}>A code has been sent to your email address. Enter that code here.</RobotoText>
            </View>
          
            <CustomTextInput
                font="regular"
                placeholder="Enter Code"
                autoFocus={true}
                autoCapitalize= 'none'
                keyboardType='number-pad'
                textContentType='oneTimeCode'
            />
          
            <View style={{marginTop: 10,}}>
                <PrimaryButton text="Continue" onPress={() => navigation.navigate('NewPassword')}/>
            </View>
        </View>
        
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end', marginBottom: 20,}}>
          
            <View style={{marginTop: 10, marginBottom: 63,}}>
                <SecondaryButton text='Send Code Again'/>
            </View>

        </View>

    </KeyboardAvoidingView>
  );
}

ForgotPassScreen.navigationOptions = ({navigation}) => ({
    headerTitle: () => <RobotoText font='medium' style={{fontSize: 17}}>Confirm Your Account</RobotoText>,
    headerLeft: () => <BackButton onPress={() => navigation.navigate('InsertEmail')} />,
});