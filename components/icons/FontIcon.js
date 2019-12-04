import React from 'react';
import { Text } from 'react-native';

export default function FontIcon(props) {
    
    let iconName;

    switch(props.font) {
        case "brand":
            iconName = "fa-brands-400"
            break;
        case "regular":
            iconName = "fa-regular-400"
            terbreak;
        case "solid":
            iconName = "fa-solid-900"
            break;
    }

    return (
        <Text {...props} style={[props.style, { fontFamily: iconName, fontSize: props.size, color: props.color, }]}>
            {props.fontIcon}
        </Text>
    );
}