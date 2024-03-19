import { View, Text, Image } from 'react-native'
import React from 'react'
import { EthPrice } from './SubInfo'
import { COLORS, FONTS, SIZES } from '../constants'

const DetailsBid = ({bid}) => {
  return (
    <View style={{width: "100%", flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginVertical: SIZES.base, paddingHorizontal: SIZES.base * 2}}>
      <View style={{flex: 0.2, alignItems:"center", justifyContent:"center"}}>
      <Image source={bid.image} resizeMode="contain" style={{height: 48, width: 48}}/>
      </View>
      <View style={{alignItems:"center", flex: 0.6}}>
        <Text style={{fontFamily:FONTS.semiBold, fontSize: SIZES.small, color:COLORS.primary}}>Bid placed by {bid.name}</Text>
        <Text style={{fontFamily:FONTS.regular, fontSize: SIZES.small - 2, color:COLORS.secondary }}>{bid.date}</Text>
      </View>

      <View style={{flex: 0.2, justifyContent:"center", alignItems:"flex-start"}}>
      <EthPrice price={bid.price}/>
      </View>
    </View>
  )
}

export default DetailsBid