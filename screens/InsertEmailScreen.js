import React from 'react';
import { KeyboardAvoidingView, View, TouchableOpacity, Image, TexInput, StyleSheet, } from 'react-native';

import { RobotoText } from '../components/StyledText';
import { CustomTextInput } from '../components/CustomTextInput';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { SecondaryButton } from '../components/buttons/SecondaryButton';

export default function InsertEmailScreen() {
  return (
    <KeyboardAvoidingView behavior='padding' style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', marginHorizontal: 20,}}>
        <View style={{marginTop: 108,}}>
          <RobotoText font="medium" style={{fontSize: 20, marginBottom: 20, alignSelf: 'center'}}>Login / Sign Up</RobotoText>
          
          <CustomTextInput
              font="regular"
              placeholder="Enter your email address"
              autoFocus={true}
              autoCapitalize= 'none'
              keyboardType='email-address'
              textContentType='emailAddress'
          />
          
          <View style={{marginTop: 10,}}>
            <PrimaryButton text="Next"/>
          </View>
        </View>
        
        <View style={{flexDirection: 'column', marginBottom: 20,}}>
          <View>
            <SecondaryButton text="Use Mobile Number"/>
          </View>

          <View style={{height: 18, justifyContent: 'center', marginVertical: 5, marginHorizontal: 20, }}>
            <View style={{height:1, backgroundColor: '#E6E6E6'}}></View>
            <View style={{position: 'absolute', backgroundColor: '#fff', alignSelf: 'center', paddingHorizontal: 10,}}>
              <RobotoText style={{color: '#999999', fontSize: 15,}}>or</RobotoText>
            </View>
          </View>
          
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, marginRight: 7.5}}>
              <View>
                <SecondaryButton iconType="brand" iconColor="#3b5998" iconSize={18} fontIcon="" text="Facebook"/>
              </View>
            </View>
            <View style={{flex: 1, marginLeft: 7.5}}>
              <View>
                <SecondaryButton iconType="brand" iconColor="#4285F4" iconSize={18} fontIcon="" text="Google"/>
              </View>
            </View>
          </View>
        </View>

    </KeyboardAvoidingView>
  );
}

InsertEmailScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
});
