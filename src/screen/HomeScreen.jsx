import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'




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
import { useTheme } from '@react-navigation/native';



const HomeScreen = () => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.background }]}>
        <Header />
        <FlatList 
          data={SongsWithCategory} 
          renderItem={({ item }) => <SongCardWidthCategory item={item}/>}
          contentContainerStyle={{
            paddingBottom: 50
          }}
        />

        <FloatingPlayer />
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{        
        flex: 1,
    },
    
})