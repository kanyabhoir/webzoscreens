import { StyleSheet, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddView from './AddView';
import Wallet from './Wallet';
import Earning from './Earning';
import More from './More';
import PasswordScreen from './PasswordScreen';
import Home from './Home';
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName={"PasswordScreen"}>
      <Tab.Screen name="Home" options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../app/src/images/homeIcon.png') :require('../app/src/images/homeIcon.png')}
              style={{ width: 24, height: 24 }}
            />
          ),
        }} component={Home} />
      <Tab.Screen name="addView" options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../app/src/images/addView.png') :require('../app/src/images/addView.png')}
              style={{ width: 24, height: 24 }}
            />
          ),
        }} component={AddView} />
      <Tab.Screen name="wallet" options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../app/src/images/walletIcon.png') :require('../app/src/images/walletIcon.png')}
              style={{ width: 24, height: 24 }}
            />
          ),
        }} component={Wallet} />
      <Tab.Screen name="earning"  options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../app/src/images/homeIcon.png') :require('../app/src/images/homeIcon.png')}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}component={Earning} />
      <Tab.Screen name="more" options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../app/src/images/homeIcon.png') :require('../app/src/images/homeIcon.png')}
              style={{ width: 24, height: 24 }}
            />
          ),
        }} component={More} />
    </Tab.Navigator>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})