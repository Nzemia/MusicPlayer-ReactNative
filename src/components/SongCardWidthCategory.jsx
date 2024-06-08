import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontSize, spacing } from '../constants/dimensions'
import SongCard from './SongCard'
import { colors } from '../constants/colors'
import { fontFamilies } from '../constants/fonts'

const SongCardWidthCategory = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.headingText}>Recommended for you</Text> 

        <FlatList 
          data={[1, 2, 3, 4, 5]}          
          renderItem={SongCard} 
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