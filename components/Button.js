import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants'

export const CircularButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: COLORS.white, position: "absolute", borderRadius: SIZES.extraLarge, justifyContent: "center", alignItems: "center", ...SHADOWS.dark, ...props }}
      onPress={handlePress}
    >
      <Image source={imgUrl} resizeMode="contain" style={{ height: 24, width: 24 }} />
    </TouchableOpacity>
  )
}

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity style={{  backgroundColor: COLORS.primary, borderRadius: SIZES.extraLarge, minWidth: minWidth, padding: SIZES.small}}
      onPress={handlePress}
    >
     <Text style={{fontFamily:FONTS.semiBold, color: COLORS.white, fontSize:fontSize, textAlign:"center"}}>Place a bid</Text> 
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})