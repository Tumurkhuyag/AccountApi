import React from 'react';
import { View, TouchableOpacity, Image, TexInput, StyleSheet, } from 'react-native';

import { RobotoText } from '../components/StyledText';
import { CustomTextInput } from '../components/CustomTextInput';

export default function InsertEmailScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', marginHorizontal: 20,}}>
        <RobotoText font="medium" style={{fontSize: 20, marginBottom: 20, alignSelf: 'center'}}>Login / Sign Up</RobotoText>
        <CustomTextInput
            font="regular"
            placeholder="Enter your email address"
            autoFocus={true}
        />
        <TouchableOpacity style={{height: 40, backgroundColor: '#000', marginTop: 10}} >

        </TouchableOpacity>
    </View>
  );
}

InsertEmailScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
});
