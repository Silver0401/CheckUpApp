/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';

import {styles} from './style/globals';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Pages
import Home from './pages/Home';
import Patient from './pages/Patient';

import Doctor from './pages/Doctor';
import Camera from './pages/Doctor/Camera';
import Patients from './pages/Doctor/Patients';
import Calendar from './pages/Doctor/Calendar';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.fullContainer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen name="Patient" component={Patient} />
          <Stack.Screen name="Doctor" component={Doctor} />
          <Stack.Screen name="Camera" component={Camera} />
          <Stack.Screen name="Patients" component={Patients} />
          <Stack.Screen name="Calendar" component={Calendar} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
