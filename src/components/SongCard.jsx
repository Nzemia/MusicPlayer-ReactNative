import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontFamilies } from '../constants/fonts';
import { fontSize, spacing } from '../constants/dimensions';
import TrackPlayer from 'react-native-track-player';
import { useTheme } from '@react-navigation/native';


const imageUrl = "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/152/325x325/1705340894_JZ2NifV4gB_2024---CARTOON-JEYJA---On--On-ft.-Daniel-Levi.jpg";

const SongCard = ({ item, containerStyle, imageStyle, handlePlay }) => {
  const { colors } = useTheme();

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
        style={[styles.title, { color: colors.textPrimary }]}
        numberOfLines={1}
      >
        {item?.title}
      </Text>

      <Text style={[styles.artist, { color: colors.textSecondary }]}>
        {item?.artist}
      </Text>
      
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
        fontFamily: fontFamilies.medium,
        textAlign: "center",
        fontSize: fontSize.lg,
        paddingVertical: spacing.sm,
    },
    artist: {        
        textAlign: "center",
        fontSize: fontSize.md,
        fontFamily: fontFamilies.regular,
    }
})