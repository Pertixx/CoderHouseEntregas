import { Image, StyleSheet, Text, View } from 'react-native'

import { FONTS } from '../constants'
import React from 'react'

const IngredientCard = ({ingredient}) => {
  return (
    <View style={styles.itemContainer}>
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'lightgray',
          height: 50,
          width: 50,
          borderRadius: 5,
        }}>
          <Image
            source={ingredient.icon}
            style={{width: 40, height: 40}}
          />
        </View>
        <View style={{
          flex: 1,
          paddingHorizontal: 20,
          justifyContent: 'center'
        }}>
          <Text style={{...FONTS.body, fontWeight: 'bold'}}>{ingredient.description}</Text>
        </View>
        <View style={{
          justifyContent: 'center',
          alignItems: 'flex-end'
        }}>
          <Text style={{...FONTS.body, fontWeight: 'bold', color: 'gray'}}>{ingredient.quantity}</Text>
        </View>
      </View>
  )
}

export default IngredientCard

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
})