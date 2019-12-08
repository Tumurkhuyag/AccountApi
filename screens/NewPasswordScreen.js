import React from 'react';
import { KeyboardAvoidingView, View, } from 'react-native';

import { RobotoText } from '../components/StyledText';
import { CustomTextInput } from '../components/CustomTextInput';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import BackButton from '../components/buttons/BackButton';

export default function NewPasswordScreen({navigation}) {
    return (
        <KeyboardAvoidingView behavior='padding' style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', marginHorizontal: 20,}}>
            <View style={{marginTop: 40,}}>
                <RobotoText font="medium" style={{fontSize: 20, marginBottom: 20, alignSelf: 'center'}}>Create a New Password</RobotoText>
                
                <CustomTextInput
                    font="regular"
                    placeholder="New Password"
                    autoFocus={true}
                    keyboardType='default'
                    textContentType='name'
                    secureTextEntry={true}
                />
                
                <View style={{marginTop: 10,}}>
                    <PrimaryButton text="Next" onPress={() => navigation.navigate('MainStack')}/>
                </View>

                <View style={{marginTop: 10}}>
                    <RobotoText font='regular' style={{fontSize: 15, color: '#999999', textAlign: 'center'}}>Enter a combination of at least six numbers, letters and punctuation marks (like ! and &).</RobotoText>
                </View>
    
            </View>
        </KeyboardAvoidingView>
    );
}

NewPasswordScreen.navigationOptions = ({navigation}) => ({
    headerTitle: () => <RobotoText font='medium' style={{fontSize: 17}}>Login</RobotoText>,
    headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
});