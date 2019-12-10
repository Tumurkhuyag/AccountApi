import React from 'react';
import { KeyboardAvoidingView, View, Text, } from 'react-native';

import { RobotoText } from '../components/StyledText';
import { CustomTextInput } from '../components/CustomTextInput';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { SecondaryButton } from '../components/buttons/SecondaryButton';

export default function SignUpEmailAuthScreen({navigation}) {
  return (
    <KeyboardAvoidingView behavior='padding' style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', marginHorizontal: 20,}}>
        <View>
            <View style={{marginVertical: 20}}>
                <RobotoText font='regular' style={{fontSize: 17, color: '#999999', textAlign: 'left'}}>Let us know this email belongs to you. Enter the code in the email sent to <Text style={{color:'#0091FF'}}>tomot.enkh@gmail.com</Text></RobotoText>
            </View>
          
          <CustomTextInput
              font="regular"
              placeholder="Enter Confirmation Code"
              autoFocus={true}
              autoCapitalize= 'none'
              keyboardType='number-pad'
              textContentType='oneTimeCode'
          />
          
          <View style={{marginTop: 10,}}>
            <PrimaryButton text="Confirm" onPress={() => navigation.navigate('SignUpAddPhoto')}/>
          </View>
        </View>
        
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end', marginBottom: 20,}}>
          <View>
            <SecondaryButton text='Send Email Again'/>
          </View>

          <View style={{marginTop: 10,}}>
            <SecondaryButton text='Change Email Address'/>
          </View>

          <View style={{marginTop: 10, marginBottom: 63,}}>
            <SecondaryButton text='Confirm by Phone'/>
          </View>

        </View>

    </KeyboardAvoidingView>
  );
}

SignUpEmailAuthScreen.navigationOptions = ({navigation}) => ({
    headerTitle: () => <RobotoText font='medium' style={{fontSize: 17}}>Sign Up</RobotoText>,
    headerLeft: null,
});