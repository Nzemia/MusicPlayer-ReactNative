import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
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
import TrackPlayer, { useActiveTrack } from 'react-native-track-player';
import { useNavigation } from '@react-navigation/native';
import useLikeSongs from '../store/likeStore';
import { isLikedSongExists } from '../utils';

const imageUrl = "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/152/325x325/1705340894_JZ2NifV4gB_2024---CARTOON-JEYJA---On--On-ft.-Daniel-Levi.jpg";



const PlayerScreen = () => {
    const { likedSongs, addToLiked } = useLikeSongs();
    const navigation = useNavigation();
    const activeTrack = useActiveTrack();
    const isLiked = false;
    const [isMute, setIsMute ] = useState(false);

    useEffect(() => {
        setVolume();
    }, []);

    const setVolume = async() => {
        const volume = await TrackPlayer.getVolume();
        setIsMute(volume === 0 ? true : false);
    }


    const handleGoBack = () => {
        navigation.goBack();
    };

    if(!activeTrack){
        return(
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: colors.background
            }}>
                <ActivityIndicator size={"large"} color={colors.iconPrimary}/>
            </View>
        )
    };

    const handleToggleVolume =() => {
        TrackPlayer.setVolume(isMute ? 1: 0 )     
        setIsMute(!isMute)   
    }

    
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={handleGoBack}>
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
                <Image source={{uri: activeTrack.artwork }} style={styles.coverImage} />
            </View>

            { /* render title and artist name*/}
            <View style={styles.titleRowHeartContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{activeTrack.title}</Text>
                    <Text style={styles.artist}>{activeTrack.artist}</Text>
                </View>

                <TouchableOpacity onPress={() => addToLiked(activeTrack)}>
                    <FontAwesome                    
                        name={isLikedSongExists(likedSongs, activeTrack) ? "heart" : "heart-o"} 
                        color={colors.iconSecondary}
                        size={iconSizes.md} 
                    />
                </TouchableOpacity>
            </View>

            { /* Player controls */}
            <View style={styles.playerControlContainer}>
                <TouchableOpacity style={styles.volumeWrapper} onPress={handleToggleVolume}>
                    <Feather 
                    name={isMute ? "volume-x" : "volume-1"}
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