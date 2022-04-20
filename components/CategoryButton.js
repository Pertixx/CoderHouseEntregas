import { COLORS, FONTS, SIZES } from '../constants'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CategoryButton = ({ onPress, item }) => {

  const [ selected, setSelected ] = useState(false)

  return (
    <TouchableOpacity
      onPress={() => {
        onPress(item.name)
        setSelected(!selected)
      }}
      style={[
        styles.categoryButton,
        selected
          ? {backgroundColor: COLORS.orange, borderWidth: 0}
          : null
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            selected
              ? {color: COLORS.white}
              : null
          ]}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
  )
}

export default CategoryButton

const styles = StyleSheet.create({
  categoryButton: {
    width: 100,
    height: 40,
    marginRight: SIZES.padding,
    backgroundColor: COLORS.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.gray3,
  },
  buttonText: {
    ...FONTS.bodyBold,
    color: COLORS.black,
  },
})