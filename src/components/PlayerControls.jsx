import { TouchableOpacity } from "react-native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { iconSizes } from "../constants/dimensions";
import { colors } from "../constants/colors";
import Feather from "react-native-vector-icons/Feather"




export const GoToPreviousButton = ({ size = iconSizes.lg }) => {
    return(
        <TouchableOpacity activeOpacity={0.85}>
            <FontAwesome6 
            name={"backward"} 
            size={size} 
            color={colors.iconPrimary} 
        />
        </TouchableOpacity>
    )
};

export const PlayPauseButton = ({ size = iconSizes.lg }) => {
    const isPlaying = true;
    return(
        <TouchableOpacity activeOpacity={0.85}>
            <Feather 
                name={ isPlaying? "pause" : "play" }
                size={size} 
                color={colors.iconPrimary} 
            />
        </TouchableOpacity>
    )
};

export const GoToNextButton = ({ size = iconSizes.lg }) => {    
    return(
        <TouchableOpacity activeOpacity={0.85}>
            <FontAwesome6 
            name={"forward"} 
            size={size} 
            color={colors.iconPrimary} 
        />
        </TouchableOpacity>
    )
};