import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


// icons
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { colors } from '../constants/colors';
import { iconSizes, spacing } from '../constants/dimensions';


const Header = () => {
    return (
        <View style={styles.header}>
                <TouchableOpacity>
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