import { COLORS, FONTS, images } from '../constants'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={{flex: 1}}>
        <Text style={{color: COLORS.darkGreen, ...FONTS.h2}}>Hola Usuario</Text>
        <Text style={{color: 'gray', ...FONTS.h5}}>Que quieres cocinar hoy?</Text>
      </View>
      <TouchableOpacity
        onPress={() => console.log("Profile")}
      >
        <Image
          source={images.myProfile}
          style={styles.profileImage}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 80,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
})