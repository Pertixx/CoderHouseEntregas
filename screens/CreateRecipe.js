import { StyleSheet, Text, View } from 'react-native'

import { COLORS } from '../constants'
import React from 'react'

const CreateRecipe = () => {
  return (
    <View style={styles.container}>
      <Text>CreateRecipe</Text>
    </View>
  )
}

export default CreateRecipe

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white2,
  },
})