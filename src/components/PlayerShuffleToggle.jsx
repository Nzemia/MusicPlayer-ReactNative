import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { iconSizes } from '../constants/dimensions';
import { colors } from '../constants/colors';
import TrackPlayer from 'react-native-track-player';

const PlayerShuffleToggle = () => {
    //got this from logrocket react native website
    const shuffleSongs = async () => {
        let queue = await TrackPlayer.getQueue();
        await TrackPlayer.reset();
        queue.sort(() => Math.random() - 0.5);
        await TrackPlayer.add(queue);
        await TrackPlayer.play();
    }
    return (
        <TouchableOpacity onPress={shuffleSongs}>
            <MaterialCommunityIcons 
                name={"shuffle"}
                size={iconSizes.lg}
                color={colors.iconSecondary}
            />
        </TouchableOpacity>
    )
}

export default PlayerShuffleToggle

const styles = StyleSheet.create({})