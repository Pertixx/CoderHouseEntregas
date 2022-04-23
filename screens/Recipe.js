import { COLORS, FONTS, SHADOW, SIZES } from '../constants'
import { FlatList, Image, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import BookmarkButton from '../components/BookmarkButton'
import { Feather } from '@expo/vector-icons'
import IngredientCard from '../components/IngredientCard'
import React from 'react'

const HEADER_HEIGHT = 350

const Recipe = ({navigation, route}) => {

  const { recipeItem } = route.params

  const renderHeader = () => {
    return (
      <View style={styles.backButtonContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Feather name="arrow-left" size={SIZES.icon} color={COLORS.black} />
        </TouchableOpacity>
        <BookmarkButton
          onPress={() => console.log('Bookmark')}
          colorMode='white'
        />
      </View>
    )
  }

  const renderRecipeHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.title}>
          {recipeItem.name}
        </Text>
        <Image
          source={recipeItem.image}
          style={styles.image}
        />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={recipeItem.ingredients}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => {
          return (
            <View style={{paddingHorizontal: 20}}>
              <IngredientCard ingredient={item} />
            </View>
          )
        }}
        ListHeaderComponent={
          <View style={{paddingHorizontal: SIZES.padding}}>
            {renderRecipeHeader()}
          </View>
        }
        ListFooterComponent={
          <View style={{marginBottom: 100}}/>
        }
      />
      {renderHeader()}
    </SafeAreaView>
  )
}

export default Recipe

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white2,
  },
  title: {
    ...FONTS.h1Bold,
    width: '100%',
    marginBottom: SIZES.padding,
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 45,
    borderRadius: 12,
    ...SHADOW.shadow1,
    backgroundColor: COLORS.white
  },
  image: {
    height: HEADER_HEIGHT / 2,
    width: '100%',
    borderRadius: SIZES.padding - 5,
  },
  headerContainer: {
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 20,
    marginTop: SIZES.height * 0.11,
  },
  backButtonContainer: {
    flex: 1,
    position: 'absolute',
    top: Platform.OS === 'ios' ? SIZES.padding * 3.5 : SIZES.padding,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
  },
})