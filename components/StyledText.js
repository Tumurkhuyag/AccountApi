import React from 'react';
import { Text } from 'react-native';

export function RobotoText(props) {
  
  let fontName;

  switch(props.font) {
    case "black":
      fontName = "Roboto-Black"
      break;
    case "bold":
      fontName = "Roboto-Bold"
      break;
    case "medium":
      fontName = "Roboto-Medium"
      break;
    default:
      fontName = "Roboto-Regular"
  }

  return (
    <Text {...props} style={[props.style, { fontFamily: fontName }]} />
  );
}
