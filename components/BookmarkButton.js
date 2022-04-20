import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import { COLORS } from '../constants'
import { Feather } from '@expo/vector-icons'

const BookmarkButton = ({ onPress }) => {

  const [ selected, setSelected ] = useState(false)

  return (
    <TouchableOpacity
      onPress={() => {
        onPress()
        setSelected(!selected)
      }}
      style={styles.container}
    >
      {
        selected
          ? <AntDesign name="heart" size={24} color={COLORS.orange} />
          : <Feather name="heart" size={24} color={COLORS.white} />
      }
    </TouchableOpacity>
  )
}

export default BookmarkButton

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    width: 40,
    height: 40,
    //position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    //right: 10,
    //top: 15,
    borderRadius: 10,
  },
})