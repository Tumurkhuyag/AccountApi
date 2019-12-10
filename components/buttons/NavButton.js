import React from 'react';
import { TouchableOpacity } from 'react-native';

import { RobotoText } from '../StyledText';

export default function NavButton(props) {
  return (
    <TouchableOpacity
      style={{flex: 1, flexDirection: 'row', height: 44, alignItems: 'center'}}
      onPress={props.onPress}
     >
      <RobotoText font="regular" style={{fontSize: 17, marginRight: 10,}}>{props.text}</RobotoText>
     </TouchableOpacity>
  );
}