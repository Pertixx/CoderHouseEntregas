import { StyleSheet, Text, View } from 'react-native'

import { COLORS } from '../constants'
import React from 'react'

const Search = () => {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white2,
  },
})