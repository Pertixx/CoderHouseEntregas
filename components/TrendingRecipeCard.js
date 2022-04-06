import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { FONTS } from '../constants'
import React from 'react'
import Recipe from '../screens/Recipe'
import RecipeCardInfo from './RecipeCardInfo'

const TrendingRecipeCard = ({onPress, recipeItem}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(<Recipe onPress={onPress} recipeItem={recipeItem}/>)}
    >
      <Image
        source={recipeItem.image}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.category}>
        <Text style={{color: '#fff', ...FONTS.h4}}>{recipeItem.category}</Text>
      </View>
      <RecipeCardInfo recipeItem={recipeItem} />
    </TouchableOpacity>
  )
}

export default TrendingRecipeCard

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: 250,
    marginTop: 10,
    marginRight: 20,
    borderRadius: 10,
  },
  image: {
    width: 250,
    height: 350,
    borderRadius: 10,
  },
  category: {
    position: "absolute",
    top: 15,
    left: 15,
    backgroundColor: 'gray',
    paddingHorizontal: 15,
    paddingVertical: 1,
    borderRadius: 15,
  },
})