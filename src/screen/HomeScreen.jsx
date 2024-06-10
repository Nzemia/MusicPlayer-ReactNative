import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';




// icons
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { fontSize, iconSizes, spacing } from '../constants/dimensions';
import Header from '../components/Header';
import { fontFamilies } from '../constants/fonts';
import SongCard from '../components/SongCard';
import SongCardWidthCategory from '../components/SongCardWidthCategory';
import FloatingPlayer from '../components/FloatingPlayer';
import { SongsWithCategory } from '../data/songsWithCategory';



const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Header />
        <FlatList 
          data={SongsWithCategory} 
          renderItem={SongCardWidthCategory}
          contentContainerStyle={{
            paddingBottom: 400
          }}
        />

        <FloatingPlayer />
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.background,
        flex: 1,
    },
    
})