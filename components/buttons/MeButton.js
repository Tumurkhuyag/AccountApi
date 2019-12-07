import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

export default function MeButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      // onPress={() => this.props.navigation.navigate('Details')}
     >
      <Image
        source={props.profilePic}
        style={{ width: 40, height: 40, marginLeft: 20, }}
      />
     </TouchableOpacity>
  );
}