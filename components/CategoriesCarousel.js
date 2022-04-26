import { COLORS, FONTS, SIZES } from '../constants'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import CategoryButton from './CategoryButton'
import SeeAllButton from './SeeAllButton'
import { useSelector } from 'react-redux'

const CategoriesCarousel = ({ onPress }) => {

  const [ selected, setSelected ] = useState(false)

  const categories = useSelector(state => state.categories.categories)

  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <Text style={{...FONTS.h2}}>Categorias</Text>
        <SeeAllButton
          text='Ver todas'
          onPress={() => console.log('Navegar a otra screen?')}
          textStyle={{color: COLORS.orange, ...FONTS.bodyBold}}
        />
      </View>
      <FlatList
        data={categories}
        keyExtractor={item => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <CategoryButton item={item} />}
      />
    </View>
  )
}

export default CategoriesCarousel

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.padding,
  },
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: SIZES.padding,
  },
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
  },
})