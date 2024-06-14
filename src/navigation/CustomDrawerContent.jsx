import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { fontSize, iconSizes, spacing } from '../constants/dimensions'
import { fontFamilies } from '../constants/fonts'
import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useTheme } from '@react-navigation/native'
import { useThemeStore } from '../store/themeStore'



const CustomDrawerContent = ( props ) => {
    const { isDarkMode, toggleTheme } = useThemeStore();
    const { colors } = useTheme();

    
    const toggleDrawer = ()=> {
        props.navigation.toggleDrawer();
    }
    return (
        <DrawerContentScrollView style={[styles.container, {backgroundColor: colors.background}]}>
            <View style={styles.headerIconContainer}>
                <TouchableOpacity onPress={toggleDrawer}>
                    <AntDesign 
                        name="close" 
                        color={colors.iconPrimary}
                        size={iconSizes.lg} 
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => toggleTheme()}>
                    <Octicons 
                        name={isDarkMode? "sun" : "moon"} 
                        color={colors.iconPrimary}
                        size={iconSizes.lg} 
                    />
                </TouchableOpacity>
            </View>

            {/* Menu Item container*/}
            <View style={styles.drawerItemContainer}>
                <DrawerItem label={"Profile"} icon={() => (
                    <FontAwesome 
                        name="user"
                        size={iconSizes.md}
                        color={colors.iconSecondary}                        
                    />
                )}
                    labelStyle={[styles.labelStyle, {color: colors.textPrimary}]}
                    style={styles.drawerItem}
                />


                <DrawerItem label={"Liked Songs"} icon={() => (
                    <FontAwesome 
                        name="heart"
                        size={iconSizes.md}
                        color={colors.iconSecondary}                        
                    />
                )}
                    labelStyle={[styles.labelStyle, {color: colors.textPrimary}]}
                    style={styles.drawerItem}
                    onPress={
                        () => props.navigation.navigate("Like_Screen")}
                />


                <DrawerItem label={"Language"} icon={() => (
                    <FontAwesome 
                        name="language"
                        size={iconSizes.md}
                        color={colors.iconSecondary}                        
                    />
                )}
                    labelStyle={[styles.labelStyle, {color: colors.textPrimary}]}
                    style={styles.drawerItem}                    
                />

                <DrawerItem label={"Contact Us"} icon={() => (
                    <FontAwesome 
                        name="envelope"
                        size={iconSizes.md}
                        color={colors.iconSecondary}                        
                    />
                )}
                    labelStyle={[styles.labelStyle, {color: colors.textPrimary}]}
                    style={styles.drawerItem}                    
                />

                <DrawerItem label={"FAQ's"} icon={() => (
                    <FontAwesome 
                        name="question-circle-o"
                        size={iconSizes.md}
                        color={colors.iconSecondary}                        
                    />
                )}
                    labelStyle={[styles.labelStyle, {color: colors.textPrimary}]}
                    style={styles.drawerItem}                    
                />

                <DrawerItem label={"Settings"} icon={() => (
                    <FontAwesome 
                        name="cog"
                        size={iconSizes.md}
                        color={colors.iconSecondary}                        
                    />
                )}
                    labelStyle={[styles.labelStyle, {color: colors.textPrimary}]}
                    style={styles.drawerItem}                    
                />
                

                
            </View>


        </DrawerContentScrollView>
    )
}

export default CustomDrawerContent

const styles = StyleSheet.create({
    container: {        
        padding: spacing.lg
    },
    headerIconContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    labelStyle: {
        fontSize: fontSize.md,        
        fontFamily: fontFamilies.bold
    },
    drawerItem: {
        marginVertical: spacing.sm,
    },
    drawerItemContainer: {
        marginVertical: spacing.xl,
    }
})