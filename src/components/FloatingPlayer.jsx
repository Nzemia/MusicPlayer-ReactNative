import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../constants/colors'
import { fontSize, spacing } from '../constants/dimensions'
import { fontFamilies } from '../constants/fonts'
import { GoToNextButton, GoToPreviousButton, PlayPauseButton } from './PlayerControls'
import { useSharedValue } from 'react-native-reanimated'
import { Slider } from 'react-native-awesome-slider'
import MovingText from './MovingText'
import { useNavigation } from '@react-navigation/native'
import { useActiveTrack, useProgress } from 'react-native-track-player'



const imageUrl = "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/152/325x325/1705340894_JZ2NifV4gB_2024---CARTOON-JEYJA---On--On-ft.-Daniel-Levi.jpg"



const FloatingPlayer = () => {
    const navigation = useNavigation();
    const progress = useSharedValue(0.2);
    const min = useSharedValue(0);
    const max = useSharedValue(10);
    const activeTrack = useActiveTrack();
    const { duration, position } = useProgress();
    const isSliding = useSharedValue(false);

    if(!isSliding.value) {
        progress.value = duration > 0 ? position / duration : 0;
    }


    const handleOpenPlayerScreen = ()=> {
        navigation.navigate("Player_Screen");
    };




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
                    renderBubble={() => null}
                    onSlidingStart={() => (isSliding.value = true)}
                    onValueChange={async (value) => {
                        await TrackPlayer.seekTo(value * duration);
                    }}
                    onSlidingComplete={async(value) => {
                        if(!isSliding.value) {
                            return;
                        }
                        isSliding.value = false;
                        await TrackPlayer.seekTo(value * duration);
                    }}                    
                    
                />
            </View>
            <TouchableOpacity 
                style={styles.container} 
                activeOpacity={0.85}                 
                onPress={handleOpenPlayerScreen}
            >
                <Image source={{uri: activeTrack && activeTrack.artwork ? activeTrack.artwork : imageUrl}} style={styles.coverImage} />
                <View style={styles.titleContainer}>
                    <MovingText 
                        style={styles.title} 
                        text={activeTrack? activeTrack.title : ""}
                        animationThreshold={15}
                    />                    
                    <Text style={styles.artist}>{activeTrack? activeTrack.artist : ""}</Text>
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