import React from 'react';
import { TouchableOpacity } from 'react-native';

import { RobotoText } from '../StyledText'
import FontIcon from '../icons/FontIcon';

export function SecondaryButton(props) {
    return(
        <TouchableOpacity onPress={props.onPress} style={{flexDirection: 'row', height: 40, borderColor: '#E6E6E6', borderWidth: 1, justifyContent: 'center', alignItems: 'center',}} >
            <FontIcon font={props.iconType} size={props.iconSize} color={props.iconColor} fontIcon={props.fontIcon} style={{marginRight: 10,}}/>
            <RobotoText font="regular" style={{color: '#000', fontSize: 17}}>{props.text}</RobotoText>
        </TouchableOpacity>
    );
}