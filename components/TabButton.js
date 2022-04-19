//import * as Animatable from 'react-native-animatable';

import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, SIZES } from '../constants';
import React, { useEffect, useRef } from 'react'

import { Feather } from '@expo/vector-icons'

const TabButton = (props) => {

  const { item, onPress, accessibilityState } = props
  const focused = accessibilityState.selected
  const viewRef = useRef(null)

  useEffect(() => {
    if (focused) {
      //viewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } })
    } else {
      //viewRef.current.animate({ 0: { scale: 1, }, 1: { scale: 0, } })
    }
  }, [focused])

  return (
    <TouchableOpacity
    onPress={onPress}
    style={[styles.container, Platform.OS === 'ios' ? {top:15} : null]}
    >
      <Feather name={item.iconName} size={SIZES.icon} color={focused ? COLORS.black : COLORS.gray} />
      <View>
        <View
          //ref={viewRef}
          style={[StyleSheet.absoluteFillObject, styles.emergingView]}
        >
          
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default TabButton

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emergingView: {
    backgroundColor: COLORS.black,
    borderRadius: SIZES.padding,
  },
})