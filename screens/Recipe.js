import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

const Recipe = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => onPress(null)}
      >
        <Text>Recipe</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Recipe

const styles = StyleSheet.create({})