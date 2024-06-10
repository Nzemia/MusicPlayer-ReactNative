import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontSize, spacing } from '../constants/dimensions'
import SongCard from './SongCard'
import { colors } from '../constants/colors'
import { fontFamilies } from '../constants/fonts'
import TrackPlayer from 'react-native-track-player'

const SongCardWidthCategory = ({ item }) => {
  //function for playing the song in a queue
  const handlePlayTrack = async(selectedTrack, songs = item.songs) => {    
    //make a queue and play the song
    const trackIndex = songs.findIndex((track) => track.url === selectedTrack.url);
    //if track doesnt exist
    if(trackIndex === -1) {
      return;
    }

    const beforeTracks = songs.slice(0, trackIndex);
    const afterTracks = songs.slice(trackIndex + 1);

    await TrackPlayer.reset();

    await TrackPlayer.add(selectedTrack);
    await TrackPlayer.add(afterTracks);
    await TrackPlayer.add(beforeTracks);

    await TrackPlayer.play();
    
  }
  return (
    <View style={styles.container} >
      <Text style={styles.headingText}>
        {item.title}
      </Text> 

        <FlatList 
          data={item.songs}          
          renderItem={({ item }) => <SongCard item={item} 
            handlePlay = {(selectedTrack) => {
            handlePlayTrack(selectedTrack)
          }}/>} 
          horizontal={true}
          ItemSeparatorComponent={
            <View style={{ marginHorizontal: spacing.sm }}/>
          }
          contentContainerStyle={{
            paddingHorizontal: spacing.md,
          }}          
        />
    </View>
  )
}

export default SongCardWidthCategory

const styles = StyleSheet.create({
    headingText: {
        fontSize: fontSize.xl,
        color: colors.textPrimary,
        fontFamily: fontFamilies.bold,
        paddingVertical: spacing.lg,
        paddingHorizontal: spacing.md
    },
    container: {
        flex: 1
    } 

})