import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fonts';
import { fontSize, spacing } from '../constants/dimensions';
import TrackPlayer from 'react-native-track-player';


const imageUrl = "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/152/325x325/1705340894_JZ2NifV4gB_2024---CARTOON-JEYJA---On--On-ft.-Daniel-Levi.jpg";

const SongCard = ({ item, containerStyle, imageStyle, handlePlay }) => {
  


  return (
    <TouchableOpacity 
      style={[styles.container, containerStyle]} 
      onPress={() => handlePlay(item)}
    >

      <Image 
        source={{uri: item.artwork }} 
        style={[styles.coverImage, imageStyle]} 
      />
      <Text 
        style={styles.title}
        numberOfLines={1}
      >
        {item?.title}
      </Text>

      <Text style={styles.artist}>{item?.artist}</Text>
      
    </TouchableOpacity>
  )
}

export default SongCard

const styles = StyleSheet.create({
    // container: {
    //     height: 330,
    //     width: 250,
    // },
    coverImage: {
        width: 250,
        height: 250,
        borderRadius: 15,
    },
    title: {
        color: colors.textPrimary,
        fontFamily: fontFamilies.medium,
        textAlign: "center",
        fontSize: fontSize.lg,
        paddingVertical: spacing.sm,
    },
    artist: {
        color: colors.textSecondary,
        textAlign: "center",
        fontSize: fontSize.md,
        fontFamily: fontFamilies.regular,
    }
})