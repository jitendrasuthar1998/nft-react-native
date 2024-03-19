import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'

import { COLORS, NFTData } from '../constants'

import {NFTCard, FocusedStatusBar, HomeHeader} from '../components/index.js'


const Home = () => {


  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if(!value.length) return setNftData(NFTData);

    const filteredData = NFTData.filter((item)=> item.name.toLowerCase().includes(value.toLowerCase()))


    if(filteredData.length){
      setNftData(filteredData)
    }else{
      setNftData(NFTData);
    }
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <FocusedStatusBar background={COLORS.primary}/>
      <View style={{flex:1}}>
        <View style={{zIndex: 0}}>
            <FlatList
             data={nftData}
             renderItem={({item}) => <NFTCard data={item}/>}
             keyExtractor={(item) => item.id} //a unique identifier
             showsVerticalScrollIndicator={false}
             ListHeaderComponent= {<HomeHeader onSearch={handleSearch}/>}
            />
        </View>
        <View style={{
          position:'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1
        }}>
          <View style={{flex: 0.4, backgroundColor:COLORS.primary}}></View>
          <View style={{flex:0.6, backgroundColor:COLORS.white}}></View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})