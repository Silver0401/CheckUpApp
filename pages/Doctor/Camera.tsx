import React from 'react';
import {View, Text} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {styles} from '../../style/globals';

const CameraComponent: React.FC = () => {
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;

  if (device == null)
    return (
      <View
        style={[
          styles.alignCenter,
          styles.fullContainer,
          {backgroundColor: '#22576d'},
        ]}>
        <Text style={[styles.h2, {color: '#98e2f2'}]}>Loading Camera...</Text>
      </View>
    );
  return (
    <Camera style={styles.fullContainer} device={device} isActive={true} />
  );
};

export default CameraComponent;
