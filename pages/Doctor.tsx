import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../style/globals';

// @ts-ignore
const Doctor: React.FC = ({navigation}) => {
  return (
    <View style={[styles.fullContainer, {backgroundColor: '#98e2f2'}]}>
      <View
        style={[
          styles.alignCenter,
          styles.borderRadius,
          styles.border,
          {
            flex: 1,
            borderColor: '#22576d',
            justifyContent: 'space-evenly',
          },
        ]}>
        <Text style={[styles.h2, {color: '#22576d'}]}>Patients</Text>
        <Text style={[styles.h3, styles.alignCenter]}>
          List of your current patients and their information
        </Text>
        <View style={[styles.genericButton]}>
          <Button
            title="Go to section"
            color="white"
            onPress={() => navigation.navigate('Patients')}
          />
        </View>
      </View>
      <View
        style={[
          styles.alignCenter,
          styles.borderRadius,
          styles.border,
          {
            flex: 1,
            borderColor: '#22576d',
            justifyContent: 'space-evenly',
          },
        ]}>
        <Text style={[styles.h2, {color: '#22576d'}]}>Camera</Text>
        <Text style={[styles.h3, styles.alignCenter]}>
          Scan new patients qr codes
        </Text>
        <View style={[styles.genericButton]}>
          <Button
            title="Go to section"
            color="white"
            onPress={() => navigation.navigate('Camera')}
          />
        </View>
      </View>
      <View
        style={[
          styles.alignCenter,
          styles.borderRadius,
          styles.border,
          {
            flex: 1,
            borderColor: '#22576d',
            justifyContent: 'space-evenly',
          },
        ]}>
        <Text style={[styles.h2, {color: '#22576d'}]}>Calendar</Text>
        <Text style={[styles.h3, styles.alignCenter]}>
          Check your appointments with future patients
        </Text>
        <View style={[styles.genericButton]}>
          <Button
            title="Go to section"
            color="white"
            onPress={() => navigation.navigate('Calendar')}
          />
        </View>
      </View>
    </View>
  );
};

export default Doctor;
