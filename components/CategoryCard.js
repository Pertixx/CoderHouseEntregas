import { COLORS, FONTS, SIZES } from '../constants'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import Recipe from '../screens/Recipe'

const CategoryCard = ({categoryItem, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(<Recipe onPress={onPress}/>)}
      style={styles.card}
    >
      <Image
        source={categoryItem.image}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={styles.itemName}>{categoryItem.name}</Text>
        <Text style={styles.itemInfo}>{categoryItem.duration}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'lightgray',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15
  },
  details: {
    width: "65%",
    paddingHorizontal: 20,
  },
  itemName: {
    flex: 1,
    ...FONTS.h2,
  },
  itemInfo: {
    color: 'gray',
    ...FONTS.body
  }
})