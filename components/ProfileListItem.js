import React from 'react';
import { TouchableOpacity, View, } from 'react-native';

import FontIcon from './icons/FontIcon';
import { RobotoText } from './StyledText';

export default function ProfileListItem(props) {
    return (
        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60, borderBottomColor: '#e6e6e6', borderBottomWidth: 1,}}>
            <View style={{flex: 1}}>
                <RobotoText font="medium" style={{fontSize: 17, color: '#000'}}>{props.title}</RobotoText>
                <RobotoText font="regular" style={{fontSize: 15, color: '#999'}}>{props.caption}</RobotoText>
            </View>
            
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                <FontIcon
                font="solid"
                fontIcon=''
                size={18}
                color={'#000'}
                />
            </View>
        </TouchableOpacity>
    );
}