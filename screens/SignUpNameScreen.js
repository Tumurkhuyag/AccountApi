import React from 'react';
import { KeyboardAvoidingView, View, } from 'react-native';

import { RobotoText } from '../components/StyledText';
import { CustomTextInput } from '../components/CustomTextInput';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { SecondaryButton } from '../components/buttons/SecondaryButton';

export default function SignUpNameScreen() {
    return (
        <KeyboardAvoidingView behavior='padding' style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', marginHorizontal: 20,}}>
            <View style={{marginTop: 40,}}>
                <RobotoText font="medium" style={{fontSize: 20, marginBottom: 20, alignSelf: 'center'}}>What’s your name?</RobotoText>
                
                <CustomTextInput
                    font="regular"
                    placeholder="Full name"
                    autoFocus={true}
                    keyboardType='default'
                    textContentType='name'
                />
                
                <View style={{marginTop: 10,}}>
                    <PrimaryButton text="Next" onPress={() => navigation.navigate('SignUpName')}/>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

SignUpNameScreen.navigationOptions = {
    Title: 'Sign Up',
};