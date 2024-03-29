import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'

export const NFTTitle = ({title, subTitle, titleSize, subTitleSize}) => {
  return (
    <View>
      <Text style={{fontSize:titleSize, fontFamily:FONTS.semiBold, color:COLORS.primary}}>{title}</Text>
      <Text style={{fontSize:subTitleSize, fontFamily:FONTS.ubuntu, color:COLORS.primary}}>{subTitle}</Text>
    </View>
  )
}

export const EthPrice = ({price}) => {
    return (
      <View style={{flexDirection:"row"}}>
        <Image source={assets.eth} resizeMode="contain" style={{height: 20, width: 20, marginRight:2, alignSelf:"flex-start",}}/>
        <Text style={{fontFamily:FONTS.ubuntu, fontSize:SIZES.font, color:COLORS.primary, textAlign:"left"}}>{price}</Text>
      </View>
    )
  }

  export const ImgCmp = ({imgUrl, index}) => {
    return (
      <Image
      source={imgUrl}
      resizeMode="contain"
      style={{height: 48, width: 48, marginLeft: index === 0 ? 0 : -SIZES.font}}
      />
    )
  }

  export const People = () => {
    return (
      <View style={{flexDirection:"row"}}>
        {
            [assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
                <ImgCmp key={`People-${index}`} imgUrl={imgUrl} index={index}/>
            ))
        }
      </View>
    )
  }

  export const EndDate = () => {
    return (
      <View style={{
        paddingHorizontal: SIZES.font, paddingVertical: SIZES.base, backgroundColor:"white", justifyContent:"center", alignItems:"center", ...SHADOWS.light, elevation:1, maxWidth: '50%', borderRadius:15,
      }}>
        <Text style={{fontFamily:FONTS.regular, fontSize: SIZES.small, color: COLORS.primary}}>Ending In</Text>
        <Text style={{fontFamily:FONTS.semiBold, fontSize: SIZES.medium, color: COLORS.primary}}>12h 30m</Text>
      </View>
    )
  }

  export const SubInfo = () => {
    return (
      <View style={{width: "100%", paddingHorizontal: SIZES.font, marginTop: -SIZES.extraLarge, flexDirection:"row", justifyContent:"space-between"}}>
        <People/>
        <EndDate/>
      </View>
    )
  }

