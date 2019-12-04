import React from 'react';
import FontIcon from './icons/FontIcon';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <FontIcon
    	font="solid"
      fontIcon={props.fontIcon}
      size={22}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
