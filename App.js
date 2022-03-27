import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from './assets/screens/Home'
import HotelB from './assets/screens/HotelB'
import pushOrder from './assets/screens/pushOrder'
import cart from './assets/screens/cart'
import delivery from './assets/screens/delivery'
import About from './assets/screens/about'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
      initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='HotelB' component={HotelB} />
        <Stack.Screen name='pushOrder' component={pushOrder} />
        <Stack.Screen name='cart' component={cart} />
        <Stack.Screen name='delivery' component={delivery} />
        <Stack.Screen name='About' component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
