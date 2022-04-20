import { COLORS, FONTS, SIZES, dummyData } from '../constants/'
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import CategoriesCarousel from '../components/CategoriesCarousel'
import CategoryCard from '../components/CategoryCard'
import Header from '../components/Header'
import React from 'react'
import TrendingRecipesCarousel from '../components/TrendingRecipesCarousel'
import { useState } from 'react'

const Home = ({ navigation }) => {

  const [ data, setData ] = useState(dummyData.trendingRecipes)

  const renderItem = (item) => {
    return (
      <View style={{paddingHorizontal: SIZES.padding}}>
        <CategoryCard categoryItem={item} navigation={navigation}/>
      </View>
    )
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
            <CategoriesCarousel data={dummyData.categories} onPress={() => console.log('Change flatlist content')} />
          </View>
        }
        ListFooterComponent={
          <View style={{marginBottom: SIZES.bottomTabHeight * 2}}/>
        }
      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})