import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


// icons
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { iconSizes, spacing } from '../constants/dimensions';
import { useNavigation, useTheme } from '@react-navigation/native';


const Header = () => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const toggleDrawer = () => {
        navigation.toggleDrawer();
    }
    return (
        <View style={styles.header}>
                <TouchableOpacity onPress={toggleDrawer}>
                    <Entypo 
                        name={"menu"} 
                        color={colors.iconPrimary} 
                        size={iconSizes.md} 
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <FontAwesome 
                        name={"search"}
                        color={colors.iconPrimary}
                        size={iconSizes.md}
                    />
                </TouchableOpacity>
            </View>     
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
    }
})