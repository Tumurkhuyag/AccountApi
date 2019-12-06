import React from 'react';
import { View, Text } from 'react-native';

import { RobotoText } from '../components/StyledText';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import BackButton from '../components/buttons/BackButton';

export default function SignUpAgreementScreen({navigation}) {
    return (
        <View behavior='padding' style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', marginHorizontal: 20,}}>
            <View style={{marginTop: 40,}}>
                <RobotoText font="medium" style={{fontSize: 20, marginBottom: 20, alignSelf: 'center'}}>Finishing Signing Up</RobotoText>
                
                <View style={{marginTop: 20}}>
                    <RobotoText font='regular' style={{fontSize: 17, color: '#999999', textAlign: 'center'}}>By tapping Sign Up, you agree to our <Text style={{color:'#0091FF'}}>Terms</Text>, <Text style={{color:'#0091FF'}}>Data Policy</Text> and <Text style={{color:'#0091FF'}}>Cookies Policy</Text>. You will receive a confirmation code from us.</RobotoText>
                </View>

                
            </View>

            <View style={{flexDirection: 'column', marginBottom: 40,}}>
                <View>
                    <PrimaryButton text="Next" onPress={() => navigation.navigate('SignUpEmailAuth')}/>
                </View>
            </View>
        </View>
    );
}

SignUpAgreementScreen.navigationOptions = ({navigation}) => ({
    headerTitle: () => <RobotoText font='medium' style={{fontSize: 17}}>Sign Up</RobotoText>,
    headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
});