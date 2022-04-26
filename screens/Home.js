import { COLORS, FONTS, SIZES, dummyData } from '../constants/'
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CategoriesCarousel from '../components/CategoriesCarousel'
import Header from '../components/Header'
import RecipeCard from '../components/RecipeCard'
import TrendingRecipesCarousel from '../components/TrendingRecipesCarousel'

const Home = ({ navigation }) => {

  const dispatch = useDispatch()
  const data = useSelector(state => state.recipes.filteredRecipes)
  const selectedCategories = useSelector(state => state.categories.selectedCategories)

  const renderItem = (item) => {
    return (
      <View style={{paddingHorizontal: SIZES.padding}}>
        <RecipeCard recipeItem={item} navigation={navigation} />
      </View>
    )
  }

  const filterFlatListContent = (category) => {
    if (selectedCategories.includes(category)) {
      let index = selectedCategories.indexOf(category)
      selectedCategories.splice(index, 1)
    } else {
      selectedCategories.push(category)
    }

    if (selectedCategories.length > 0) {
      let new_data = []
      setData(new_data)
      selectedCategories.forEach(category => {
        dummyData.trendingRecipes.map((item) => {
          if (item.category === category) {
            new_data.push(item)
          }
        })
      })
      setData(new_data)
    } else {
      setData(dummyData.trendingRecipes)
    }
  }

  const renderEmptyListMessage = () => {
    if (data.length === 0) {
      return (
        <View style={{alignItems: 'center', marginTop: SIZES.padding}}>
          <Text style={{...FONTS.h3, color: COLORS.gray}}>No hay recetas con la categoria seleccionada</Text>
        </View>
      )
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default"/>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => renderItem(item)}
        ListHeaderComponent={
          <View style={{paddingHorizontal: SIZES.padding}}>
            <Header />
            <TrendingRecipesCarousel navigation={navigation} />
            <CategoriesCarousel data={dummyData.categories} onPress={filterFlatListContent} />
          </View>
        }
        ListFooterComponent={
          <View>
            {renderEmptyListMessage()}
            <View style={{marginBottom: SIZES.bottomTabHeight * 2}}/>
          </View>
        }
      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white2,
  },
})