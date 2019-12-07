import React from 'react';
import { TouchableOpacity, View, } from 'react-native';

import FontIcon from './icons/FontIcon';
import { RobotoText } from './StyledText';

export default function SectionTitle(props) {
    return (
        <TouchableOpacity style={{height: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View>
                <RobotoText font="bold" style={{fontSize: 20, color: '#000'}}>{props.title}</RobotoText>
            </View>
            
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                <FontIcon
                font="solid"
                fontIcon={props.fontIcon}
                size={18}
                color={'#000'}
                />
                <RobotoText font="regular" style={{fontSize: 17, color: '#000'}}>{props.text}</RobotoText>
            </View>
          
        </TouchableOpacity>
    );
}
