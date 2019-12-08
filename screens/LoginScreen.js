import React from 'react';
import { KeyboardAvoidingView, View, Image, } from 'react-native';

import { RobotoText } from '../components/StyledText';
import { CustomTextInput } from '../components/CustomTextInput';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { SecondaryButton } from '../components/buttons/SecondaryButton';
import BackButton from '../components/buttons/BackButton';
import FontIcon from '../components/icons/FontIcon';


export default function LoginScreen({navigation}) {
    return (
        <KeyboardAvoidingView behavior='padding' style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', marginHorizontal: 20,}}>
            <View style={{marginTop: 40,}}>
                
                <RobotoText font="medium" style={{fontSize: 20, marginBottom: 20, alignSelf: 'center'}}>Enter Password</RobotoText>

                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50,}}>
                    <View>
                        <Image
                            source={require('../assets/images/profile-pic-placeholder.png')}
                            style={{height: 50, width: 50,}}
                        />
                    </View>
                    
                    <View style={{flex: 1, marginLeft: 10,}}>
                        <RobotoText font="medium" style={{fontSize: 17, color: '#000'}}>T*******g</RobotoText>
                        <RobotoText font="regular" style={{fontSize: 15, color: '#999'}}>tomor.enkh@gmail.com</RobotoText>
                    </View>
                    
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginRight: 10,}}>
                        <FontIcon
                        font="solid"
                        fontIcon=''
                        size={18}
                        color={'#000'}
                        />
                    </View>
                </View>

                <View style={{height: 1, justifyContent: 'center', marginVertical: 10, }}>
                    <View style={{height:1, backgroundColor: '#E6E6E6'}}></View>
                </View>
                
                <CustomTextInput
                    font="regular"
                    placeholder="Password"
                    autoFocus={true}
                    keyboardType='default'
                    textContentType='name'
                    secureTextEntry={true}
                />
                
                <View style={{marginTop: 10,}}>
                    <PrimaryButton text="Login" onPress={() => navigation.navigate('MainStack')}/>
                </View>
    
            </View>

            <View style={{marginBottom: 83,}}>
                <SecondaryButton text='Forgot Password?'/>
            </View>
        </KeyboardAvoidingView>
    );
}

LoginScreen.navigationOptions = ({navigation}) => ({
    headerTitle: () => <RobotoText font='medium' style={{fontSize: 17}}>Login</RobotoText>,
    headerLeft: () => <BackButton onPress={() => navigation.navigate('InsertEmail')} />,
});