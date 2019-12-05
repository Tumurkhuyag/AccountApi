import React from 'react';
import { TextInput } from 'react-native';

export function CustomTextInput(props) {
  
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
    <TextInput
            {...props}
            placeholderTextColor="#999999"
            style={[props.style, {fontFamily: fontName, backgroundColor: '#EFEFEF', borderColor: '#E6E6E6', borderWidth: 1, fontSize: 17, paddingHorizontal: 10, paddingVertical: 10,}]}
        />
  );
}