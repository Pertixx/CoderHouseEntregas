import { COLORS, FONTS, icons } from '../constants'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'

import { BlurView } from 'expo-blur'
import React from 'react'

const RecipeCardInfo = ({recipeItem}) => {
  return (
    <BlurView
      tint='dark'
      intensity={Platform.OS != 'ios' ? 100 : 80}
      style={styles.blurView}
    >
      <View style={styles.details}>
        <View style={styles.topDetails}>
          <Text style={styles.name}>{recipeItem.name}</Text>
          <Image
            source={icons.bookmark}
            style={{width: 20, height: 20, tintColor: COLORS.darkGreen}}
          />
        </View>
        <Text style={styles.description}>{recipeItem.duration}</Text>
      </View>
    </BlurView>
  )
}

export default RecipeCardInfo

const styles = StyleSheet.create({
  blurView: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    height: 100,
    borderRadius: 15,
  },
  details: {
    flex: 1,
    padding: 10,
  },
  topDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    width: "70%",
    ...FONTS.h3,
    fontSize: 18,
  },
  description: {
    color: 'lightgray',
  },
})