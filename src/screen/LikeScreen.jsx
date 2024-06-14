import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import AntDesign from "react-native-vector-icons/AntDesign";
import { fontSize, iconSizes, spacing } from '../constants/dimensions';
import Fontisto from "react-native-vector-icons/Fontisto";
import { fontFamilies } from '../constants/fonts';
import SongCard from '../components/SongCard';
import FloatingPlayer from '../components/FloatingPlayer';
import useLikeSongs from '../store/likeStore';
import { useNavigation } from '@react-navigation/native';

const LikeScreen = () => {
    const navigation = useNavigation();
    const { likedSongs, addToLiked } = useLikeSongs();
    const handleGoBack = () => {
        navigation.goBack();
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

            <TouchableOpacity>
                <Fontisto
                    name={"equalizer"} 
                    color={colors.iconPrimary} 
                    size={iconSizes.md}
                />
            </TouchableOpacity>
        </View>

        <Text style={styles.headingText}>
            Liked Songs
        </Text>
        
        <FlatList             
            data={likedSongs}
            renderItem={({ item }) => <SongCard containerStyle={{
                width: "47%"
            }}
            imageStyle={{
                height: 160,
                width: 160,
            }}
            item = {item}
            />}
            numColumns={2}
            contentContainerStyle={{
                paddingBottom: 500,
                paddingHorizontal: spacing.lg,
            }}
            columnWrapperStyle={{
                justifyContent: "space-between",
                marginVertical: spacing.lg
            }}
        />

        <FloatingPlayer />
        </View>
    )
}

export default LikeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",        
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
    },
    headingText: {
        fontSize: fontSize.xl,
        color: colors.textPrimary,
        fontFamily: fontFamilies.bold,
        padding: spacing.md
    }
})