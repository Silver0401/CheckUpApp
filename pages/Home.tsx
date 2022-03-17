import React from 'react';
import {View, Button, Text as RNText} from 'react-native';
import {styles} from './../style/globals';
import GradientBall from './../components/gradientBall';
import {Canvas, Fill, Text} from '@shopify/react-native-skia';

// @ts-ignore
const Home = ({navigation}) => {
  return (
    <View style={styles.fullContainer}>
      <View style={[styles.fullContainer, {flex: 1}]}>
        <Canvas style={[styles.alignCenter, {flex: 1}]}>
          <Fill color={'#98e2f2'} />
          <GradientBall
            coordinates={[100, 100]}
            size={300}
            colors={['#f3f3f3', '#3ed4f3']}
          />
          <GradientBall
            coordinates={[10, 10]}
            size={200}
            colors={['#0a4865', '#f0fff6']}
          />
          <Text
            x={45}
            y={100}
            text="Check"
            familyName="serif"
            size={45}
            color="#57d4f3"
          />
          <Text
            x={80}
            y={150}
            text="Up"
            familyName="serif"
            size={45}
            color="#57d4f3"
          />
          <Text
            x={150}
            y={230}
            text="The most efficient way"
            familyName="serif"
            size={20}
            color="#09425c"
          />
          <Text
            x={150}
            y={280}
            text="to attend your patients"
            familyName="serif"
            size={20}
            color="#09425c"
          />
        </Canvas>
      </View>
      <View
        style={[
          styles.fullContainer,
          {
            flexDirection: 'column',
            backgroundColor: '#98e2f2',
            flex: 1,
          },
        ]}>
        <View style={[styles.alignCenter, {flex: 1, flexDirection: 'column'}]}>
          <View
            style={[
              styles.alignCenter,
              styles.fullContainer,
              {
                flex: 1.5,
                flexDirection: 'column',
                justifyContent: 'space-evenly',
              },
            ]}>
            <RNText style={[styles.h3]}>Select the button</RNText>
            <RNText style={[styles.h3]}>that corresponds to you</RNText>
          </View>

          <View
            style={[
              styles.alignCenter,
              styles.fullContainer,
              {flex: 2, justifyContent: 'space-around', flexDirection: 'row'},
            ]}>
            <View style={styles.genericButton}>
              <Button
                title="Patient"
                color="white"
                onPress={() => navigation.navigate('Patient')}
              />
            </View>

            <View style={[styles.genericButton, {backgroundColor: 'white'}]}>
              <Button
                title="Doctor"
                color="#22576d"
                onPress={() => navigation.navigate('Doctor')}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
