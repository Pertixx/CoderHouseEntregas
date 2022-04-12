import { FONTS, dummyData } from '../constants'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import TrendingRecipeCard from './TrendingRecipeCard'

const TrendingRecipesCarousel = ({navigation}) => {
  return (
    <View style={styles.trendingContainer}>
        <Text style={{...FONTS.h2}}>Recetas Mas Populares</Text>
        <FlatList
          data={dummyData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => {
            return (
              <View>
                <TrendingRecipeCard recipeItem={item} navigation={navigation}/>
              </View>
            )
          }}
        />
      </View>
  )
}

export default TrendingRecipesCarousel

const styles = StyleSheet.create({
  trendingContainer: {
    marginTop: 15,
  }
})