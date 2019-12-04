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
            autoFocus={true}
            style={[props.styel, {fontFamily: fontName, height: 40, backgroundColor: '#EFEFEF', borderColor: '#E6E6E6', borderWidth: 1, fontSize: 17, paddingHorizontal: 10,}]}
        />
  );
}