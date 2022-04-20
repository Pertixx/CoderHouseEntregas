import { COLORS, FONTS, SIZES, images } from '../constants'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import React from 'react'
import { dummyData } from '../constants'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <View style={styles.iconContainer}>
          <Feather name="sun" size={24} color={COLORS.gray} />
          <Text style={{color: COLORS.black2, ...FONTS.h4}}>Buenas Noches</Text>
        </View>
        <Text style={{color: COLORS.black2, ...FONTS.h2}}>{dummyData.user.name}</Text>
      </View>
      <TouchableOpacity
        onPress={() => console.log("Profile")}
      >
        <Image
          source={dummyData.user.profilePic}
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
    height: SIZES.height * 0.08,
    marginTop: SIZES.padding,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flex: 1,
  }
})