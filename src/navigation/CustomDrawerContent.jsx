import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { colors } from '../constants/colors'
import { fontSize, iconSizes, spacing } from '../constants/dimensions'
import { fontFamilies } from '../constants/fonts'
import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";



const CustomDrawerContent = ( props ) => {
    const isDarkMode = true;
    const toggleDrawer = ()=> {
        props.navigation.toggleDrawer();
    }
    return (
        <DrawerContentScrollView style={styles.container}>
            <View style={styles.headerIconContainer}>
                <TouchableOpacity onPress={toggleDrawer}>
                    <AntDesign 
                        name="close" 
                        color={colors.iconPrimary}
                        size={iconSizes.lg} 
                    />
                </TouchableOpacity>

                <TouchableOpacity>
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
                    labelStyle={styles.labelStyle}
                    style={styles.drawerItem}
                />


                <DrawerItem label={"Liked Songs"} icon={() => (
                    <FontAwesome 
                        name="heart"
                        size={iconSizes.md}
                        color={colors.iconSecondary}                        
                    />
                )}
                    labelStyle={styles.labelStyle}
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
                    labelStyle={styles.labelStyle}
                    style={styles.drawerItem}                    
                />

                <DrawerItem label={"Contact Us"} icon={() => (
                    <FontAwesome 
                        name="envelope"
                        size={iconSizes.md}
                        color={colors.iconSecondary}                        
                    />
                )}
                    labelStyle={styles.labelStyle}
                    style={styles.drawerItem}                    
                />

                <DrawerItem label={"FAQ's"} icon={() => (
                    <FontAwesome 
                        name="question-circle-o"
                        size={iconSizes.md}
                        color={colors.iconSecondary}                        
                    />
                )}
                    labelStyle={styles.labelStyle}
                    style={styles.drawerItem}                    
                />

                <DrawerItem label={"Settings"} icon={() => (
                    <FontAwesome 
                        name="cog"
                        size={iconSizes.md}
                        color={colors.iconSecondary}                        
                    />
                )}
                    labelStyle={styles.labelStyle}
                    style={styles.drawerItem}                    
                />
                

                
            </View>


        </DrawerContentScrollView>
    )
}

export default CustomDrawerContent

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        padding: spacing.lg
    },
    headerIconContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    labelStyle: {
        fontSize: fontSize.md,
        color: colors.textPrimary,
        fontFamily: fontFamilies.bold
    },
    drawerItem: {
        marginVertical: spacing.sm,
    },
    drawerItemContainer: {
        marginVertical: spacing.xl,
    }
})