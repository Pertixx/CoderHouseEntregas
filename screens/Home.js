import { FONTS, SIZES, dummyData } from '../constants/'
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import CategoryCard from '../components/CategoryCard'
import Header from '../components/Header'
import React from 'react'
import TrendingRecipesCarousel from '../components/TrendingRecipesCarousel'
import { useState } from 'react'

const Home = ({ navigation }) => {


  const renderItem = (item) => {
    return (
      <View style={{paddingHorizontal: SIZES.padding}}>
        <CategoryCard categoryItem={item} navigation={navigation}/>
      </View>
    )
  }

  const renderCategoryHeader = () => {
    return (
      <View style={styles.categoryContainer}>
        <Text style={{...FONTS.h2}}>Categorias</Text>
        <TouchableOpacity>
          <Text style={{color: 'gray', ...FONTS.body}}>View All</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default"/>
      <FlatList
        data={dummyData}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => renderItem(item)}
        ListHeaderComponent={
          <View style={{paddingHorizontal: SIZES.padding}}>
            <Header />
            <TrendingRecipesCarousel navigation={navigation}/>
            {renderCategoryHeader()}
          </View>
        }
        ListFooterComponent={
          <View style={{marginBottom: 60}}/>
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
  categoryContainer: {
    flexDirection: "row",
    marginTop: 25,
    alignItems: "center",
    justifyContent: "space-between",
  },
})