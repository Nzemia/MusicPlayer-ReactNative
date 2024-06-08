import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { iconSizes } from '../constants/dimensions';
import { colors } from '../constants/colors';

const PlayerShuffleToggle = () => {
    return (
        <TouchableOpacity>
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