import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'

import { COLORS, FONTS, SIZES, assets } from '../constants'

const HomeHeader = ({ onSearch }) => {
  return (
    <View style={{ backgroundColor: COLORS.primary, padding: SIZES.font }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Image source={assets.logo} resizeMode="contain" style={{ height: 25, width: 90 }} />
        <View style={{ width: 45, height: 45 }}>
          <Image source={assets.person03} resizeMode="contain" style={{ height: "100%", width: "100%" }} />
          <Image source={assets.badge} resizeMode="contain" style={{ position: "absolute", width: 15, height: 15, bottom: 0, right: 0 }} />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text style={{ fontFamily: FONTS.maddi, fontSize: SIZES.large, color: COLORS.white }}>Hello, Jitubhai 👋</Text>
        <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large, color: COLORS.white, marginTop: SIZES.base / 2 }}>Let's find a masterpiece</Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View style={{ width: "100%", borderRadius: SIZES.extraLarge, backgroundColor: "lightgray", flexDirection: "row", alignItems: "center", paddingHorizontal: SIZES.font, paddingVertical: SIZES.small - 2 }}>
          <Image source={assets.search} resizeMode="contain" style={{ height: 20, width: 20, marginRight: SIZES.base }} />
          <TextInput style={{ flex: 1 }}
            placeholder="Search NFTs"
            onChangeText={onSearch}
          />
        </View>
      </View>

    </View>
  )
}

export default HomeHeader