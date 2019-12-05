import React from 'react';
import { TouchableOpacity } from 'react-native';

import { RobotoText } from '../StyledText'

export function PrimaryButton(props) {
    return(
        <TouchableOpacity style={{height: 40, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center',}} >
            <RobotoText font="regular" style={{color: '#fff', fontSize: 17}}>{props.text}</RobotoText>
        </TouchableOpacity>
    );
}