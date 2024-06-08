import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import AntDesign from "react-native-vector-icons/AntDesign";
import { fontSize, iconSizes, spacing } from '../constants/dimensions';
import { fontFamilies } from '../constants/fonts';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather"
import PlayerRepeatToggle from '../components/PlayerRepeatToggle';
import PlayerShuffleToggle from '../components/PlayerShuffleToggle';
import PlayerProgressBar from '../components/PlayerProgressBar';
import { GoToNextButton, GoToPreviousButton, PlayPauseButton } from '../components/PlayerControls';

const imageUrl = "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/152/325x325/1705340894_JZ2NifV4gB_2024---CARTOON-JEYJA---On--On-ft.-Daniel-Levi.jpg";


const PlayerScreen = () => {
    const isLiked = false;
    const isMute = true;
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <AntDesign 
                        name={"arrowleft"} 
                        color={colors.iconPrimary} 
                        size={iconSizes.md}
                    />
                </TouchableOpacity>
                
                {/* header */}
                <Text style={styles.headerText}>
                    Playing Now
                </Text>
            </View>

            {/* image */}
            <View style={styles.coverImageContainer}>
                <Image source={{uri: imageUrl }} style={styles.coverImage} />
            </View>

            { /* render title and artist name*/}
            <View style={styles.titleRowHeartContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Believer</Text>
                    <Text style={styles.artist}>Imagine Dragons</Text>
                </View>

                <TouchableOpacity>
                    <FontAwesome                    
                        name={isLiked ? "heart" : "heart-o"} 
                        color={colors.iconSecondary}
                        size={iconSizes.md} 
                    />
                </TouchableOpacity>
            </View>

            { /* Player controls */}
            <View style={styles.playerControlContainer}>
                <TouchableOpacity style={styles.volumeWrapper}>
                    <Feather 
                    name={isMute ? "volume-1" : "volume-x"}
                    size = {iconSizes.lg}
                    color={colors.iconSecondary}
                />
                </TouchableOpacity>

                <View style={styles.repeatShuffleWrapper}>
                    <PlayerRepeatToggle />
                    <PlayerShuffleToggle />
                </View>
            </View>

            { /* Player progress bar */}            
                <PlayerProgressBar />
            
            <View 
                style={styles.playPauseContainer}
            >
                <GoToPreviousButton />
                <PlayPauseButton />
                <GoToNextButton />

            </View>


        </View>
    )
}

export default PlayerScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: spacing.lg,        
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",            
    },
    headerText: {
        color: colors.textPrimary,        
        fontSize: fontSize.lg,
        fontFamily: fontFamilies.bold,
        flex: 1,
        textAlign: "center",
    },
    coverImageContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: spacing.lg,
    },
    coverImage: {
        height: 300,
        width: 300,
        borderRadius: 10,
    },
    title: {
        fontSize: fontSize.xl,
        color: colors.textPrimary,
        fontFamily: fontFamilies.medium
    },
    artist: {
        fontSize: fontSize.md,
        color: colors.textSecondary
    },
    titleRowHeartContainer: {
        flexDirection: "row",
        alignItems: "center",        
    },
    titleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }, 
    playerControlContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: spacing.lg,
    },
    volumeWrapper: {
        flex: 1
    },
    repeatShuffleWrapper: {
        flexDirection: "row",
        gap: spacing.md,
    },
    playPauseContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: spacing.xl,
        marginTop: spacing.xl
    }   
})