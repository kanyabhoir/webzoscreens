// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PasswordScreen from './android/screen/PasswordScreen';
import HomeScreen from './android/screen/HomeScreen';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Passwordscreen"
        component={PasswordScreen}
        // options={{title: 'Welcome'}}
      />
      <Stack.Screen name="Homescreen" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;