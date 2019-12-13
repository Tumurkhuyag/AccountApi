import React, {useState, useEffect} from 'react';
import { View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { RobotoText } from '../components/StyledText';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import NavButton from '../components/buttons/NavButton';

export default function SignUpAddPhotoScreen() {

const [image, setImage] = useState(null);


useEffect(() => {
  getPermissionAsync();
  console.log('hi');
}, []);

getPermissionAsync = async () => {
  if (Constants.platform.ios) {
    const permission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const permissionCam = await Permissions.askAsync(Permissions.CAMERA);
    if (permission.status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }else if(permissionCam.status !== 'granted'){
      alert('Sorry, we need camera permissions to make this work!');
    }
  }
}

_pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
        setImage(result.uri);
    }
};

_takeImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
        setImage(result.uri);
    }
};

return (
  <View behavior='padding' style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', marginHorizontal: 20,}}>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <View style={{marginTop: 40, marginBottom: 20, marginHorizontal: 20,}}>
              <RobotoText font='regular' style={{fontSize: 17, color: '#000', textAlign: 'center'}}>Add a profile picture so friends can find you.</RobotoText>
          </View>
          
          <View>
              {image
              ? <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
              : <Image style={{width: 170, height: 132}} source={require('../assets/images/signup-add-picture.png')}/>}
          </View>
      </View>

      <View style={{flexDirection: 'column', marginBottom: 30,}}>
          <View style={{marginBottom: 10}}>
              <PrimaryButton text='Choose a Photo' onPress={_pickImage}/>
          </View>

          <View>
              <PrimaryButton text='Take a Photo' onPress={_takeImage}/>
          </View>
      </View>
  </View>
);

}

SignUpAddPhotoScreen.navigationOptions = ({navigation}) => ({
    headerTitle: () => <RobotoText font='medium' style={{fontSize: 17}}>Add Photo</RobotoText>,
    headerRight: <NavButton text='Continue' onPress={() => navigation.navigate('MainStack')}/>,
});