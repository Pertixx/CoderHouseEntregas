import { StyleSheet, Text, View } from 'react-native'

import Login from '../screens/Login'
import Profile from '../screens/Profile'
import React from 'react'
import Recipe from '../screens/Recipe'
import TabNavigator from './TabNavigator'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName='Login'
    >
      <Stack.Screen name='HomeStack' component={TabNavigator} />
      <Stack.Screen name='Recipe' component={Recipe} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})