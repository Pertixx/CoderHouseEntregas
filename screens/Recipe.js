import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import IngredientCard from '../components/IngredientCard'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

const HEADER_HEIGHT = 350

const Recipe = ({onPress, recipeItem}) => {

  const renderRecipeHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Image
          source={recipeItem.image}
          style={styles.image}
        />
      </View>
    )
  }

  return (
    <View>
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
          <View>
            {renderRecipeHeader()}
          </View>
        }
        ListFooterComponent={
          <View style={{marginBottom: 100}}/>
        }
      />
      <View style={styles.backButtonContainer}>
        <TouchableOpacity
          onPress={() => onPress(null)}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Recipe

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: 'gray'
  },
  image: {
    height: HEADER_HEIGHT,
    width: '200%',
  },
  headerContainer: {
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 20,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
})