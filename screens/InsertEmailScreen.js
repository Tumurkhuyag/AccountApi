import React from 'react';
import { KeyboardAvoidingView, View, TouchableOpacity, Image, TexInput, StyleSheet, } from 'react-native';

import { RobotoText } from '../components/StyledText';
import { CustomTextInput } from '../components/CustomTextInput';

export default function InsertEmailScreen() {
  return (
    <KeyboardAvoidingView behavior='padding' style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', marginHorizontal: 20,}}>
        <View style={{marginTop: 108,}}>
          <RobotoText font="medium" style={{fontSize: 20, marginBottom: 20, alignSelf: 'center'}}>Login / Sign Up</RobotoText>
          
          <CustomTextInput
              font="regular"
              placeholder="Enter your email address"
              autoFocus={true}
              style={{height: 30}}
          />
          
          <TouchableOpacity style={{height: 40, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', marginTop: 10}} >
            <RobotoText font="regular" style={{color: '#fff', fontSize: 17}}>Next</RobotoText>
          </TouchableOpacity>
        </View>
        
        <View style={{flexDirection: 'column', marginBottom: 20,}}>
          <TouchableOpacity style={{height: 40, borderColor: '#E6E6E6', borderWidth: 1, justifyContent: 'center', alignItems: 'center',}} >
            <RobotoText font="regular" style={{color: '#000', fontSize: 17}}>Use Mobile Number</RobotoText>
          </TouchableOpacity>

          <View style={{height: 18, justifyContent: 'center', marginVertical: 5, marginHorizontal: 20, }}>
            <View style={{height:1, backgroundColor: '#E6E6E6'}}></View>
            <View style={{position: 'absolute', backgroundColor: '#fff', alignSelf: 'center', paddingHorizontal: 10,}}>
              <RobotoText style={{color: '#999999', fontSize: 15,}}>or</RobotoText>
            </View>
          </View>
          
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, marginRight: 7.5}}>
              <TouchableOpacity style={{height: 40, borderColor: '#E6E6E6', borderWidth: 1, justifyContent: 'center', alignItems: 'center',}} >
                <RobotoText font="regular" style={{color: '#000', fontSize: 17}}>Facebook</RobotoText>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, marginLeft: 7.5}}>
              <TouchableOpacity style={{height: 40, borderColor: '#E6E6E6', borderWidth: 1, justifyContent: 'center', alignItems: 'center',}} >
                <RobotoText font="regular" style={{color: '#000', fontSize: 17}}>Google</RobotoText>
              </TouchableOpacity>
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
