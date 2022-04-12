import { StyleSheet, Text, View } from 'react-native'

import Home from '../screens/Home'
import React from 'react'
import Recipe from '../screens/Recipe'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true
      }}
      initialRouteName='Home'
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Recipe' component={Recipe} />
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})