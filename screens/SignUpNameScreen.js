import React from 'react';
import { KeyboardAvoidingView, View, } from 'react-native';

import { RobotoText } from '../components/StyledText';
import { CustomTextInput } from '../components/CustomTextInput';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import BackButton from '../components/buttons/BackButton';

export default function SignUpNameScreen({navigation}) {
    return (
        <KeyboardAvoidingView behavior='padding' style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', marginHorizontal: 20,}}>
            <View style={{marginTop: 40,}}>
                <RobotoText font="medium" style={{fontSize: 20, marginBottom: 20, alignSelf: 'center'}}>What’s your name?</RobotoText>
                
                <CustomTextInput
                    font="regular"
                    placeholder="Your name"
                    autoFocus={true}
                    keyboardType='default'
                    textContentType='name'
                />
                
                <View style={{marginTop: 10,}}>
                    <PrimaryButton text="Next" onPress={() => navigation.navigate('SignUpPassword')}/>
                </View>

                <View style={{marginTop: 10}}>
                    <RobotoText font='regular' style={{fontSize: 15, color: '#999999', textAlign: 'center'}}>Using your real name makes it easier for friends to recognize you.</RobotoText>
                </View>
    
            </View>
        </KeyboardAvoidingView>
    );
}

SignUpNameScreen.navigationOptions = ({navigation}) => ({
    headerTitle: () => <RobotoText font='medium' style={{fontSize: 17}}>Sign Up</RobotoText>,
    headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
});