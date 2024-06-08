import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { fontSize, spacing } from '../constants/dimensions'
import { fontFamilies } from '../constants/fonts'
import { GoToNextButton, GoToPreviousButton, PlayPauseButton } from './PlayerControls'
import { useSharedValue } from 'react-native-reanimated'
import { Slider } from 'react-native-awesome-slider'
import MovingText from './MovingText'


const imageUrl = "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/152/325x325/1705340894_JZ2NifV4gB_2024---CARTOON-JEYJA---On--On-ft.-Daniel-Levi.jpg"

const FloatingPlayer = () => {
    const progress = useSharedValue(0.2);
    const min = useSharedValue(0);
    const max = useSharedValue(10);
    return (
        <View>
            <View style={{
                zIndex: 1
            }}>
                <Slider
                    style={styles.container}
                    progress={progress}
                    minimumValue={min}
                    maximumValue={max}
                    theme={{
                        maximumTrackTintColor: colors.maximumTintColor,
                        minimumTrackTintColor: colors.minimumTintColor,                        
                    }}
                    renderBubble={() => <View />}                
                />
            </View>
            <TouchableOpacity style={styles.container} activeOpacity={0.85} >
            <Image source={{uri: imageUrl }} style={styles.coverImage} />
            <View style={styles.titleContainer}>
                <MovingText 
                    style={styles.title} 
                    text={"Frank frank and Frank frank"}
                    animationThreshold={15}
                />
                {/* <Text style={styles.title}>Chaff and Dust</Text> */}
                <Text style={styles.artist}>Allan Walker</Text>
            </View>

            <View style={styles.playerPreviousButton}>
                <GoToPreviousButton />
                <PlayPauseButton />
                <GoToNextButton />
            </View>
        </TouchableOpacity>
        </View>
    )
}

export default FloatingPlayer

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    coverImage: {
        height: 60,
        width: 60,
    },
    titleContainer: {
        flex: 1,
        paddingHorizontal: spacing.sm,     
        overflow: "hidden",
        marginLeft: spacing.sm,
        marginRight: spacing.lg,   
    },
    title: {
        color: colors.textPrimary,
        fontSize: fontSize.lg,
        fontFamily: fontFamilies.regular
    },
    artist: {
        color: colors.textSecondary,
        fontSize: fontSize.md,
    },
    playerPreviousButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingRight: spacing.md,
    }

})