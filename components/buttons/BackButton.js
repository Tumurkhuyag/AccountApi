import React from 'react';
import { TouchableOpacity } from 'react-native';

import FontIcon from '../icons/FontIcon';
import { RobotoText } from '../StyledText';

export default function BackButton(props) {
  return (
    <TouchableOpacity
      style={{flex: 1, flexDirection: 'row'}}
      onPress={props.onPress}
     >
      <FontIcon
        font="solid"
        fontIcon={''}
        size={18}
        style={{ marginLeft: 10 }}
        color={'#000'}
      />
      <RobotoText font="regular" style={{fontSize: 17, marginLeft: 4,}}>Back</RobotoText>
     </TouchableOpacity>
  );
}