import { FlatList, StyleSheet, Text, View, Image, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'


import { COLORS, SIZES, FONTS, assets, SHADOWS } from '../constants'
import { CircularButton, RectButton, SubInfo, FocusedStatusBar, DetailsBid, DetailsDisc } from '../components'


const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 300 }}>
    <Image source={data.image} resizeMode="cover" style={{ width: "100%", height: "100%" }} />
    <CircularButton imgUrl={assets.left} handlePress={() => navigation.goBack()} left={15} top={ 10 } />
    <CircularButton imgUrl={assets.heart} right={15} top={ 10 } />
  </View>
)

const Details = ({ route, navigation }) => {

  // console.log(route)

  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar 
      barStyle="dark-content" 
      backgroundColor="transparent" 
      transLucent={true} />

      <View style={{ 
        width: "100%", 
        position: "absolute", 
        bottom: 0, 
        paddingVertical: SIZES.font, 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "rgba(255, 255, 255, 0.5)", 
        zIndex: 1 
        }}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo/>
            <View style={{padding: SIZES.font}}>
              <DetailsDisc data={data}/>


              {data.bids.length > 0 && (
                <Text style={{fontSize: SIZES.font, fontFamily: FONTS.semiBold, color: COLORS.primary}}>
                  Current bids
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />

    </SafeAreaView>
  )
}

export default Details

const styles = StyleSheet.create({})