import { TouchableOpacity } from "react-native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { iconSizes } from "../constants/dimensions";
import Feather from "react-native-vector-icons/Feather"
import TrackPlayer, { useIsPlaying } from "react-native-track-player";
import { useTheme } from "@react-navigation/native";




export const GoToPreviousButton = ({ size = iconSizes.lg }) => {   
    const { colors } = useTheme();
    const handleGoToPrevious = () => {
        TrackPlayer.skipToPrevious();
    } 
    return(
        <TouchableOpacity activeOpacity={0.85} onPress={handleGoToPrevious}>
            <FontAwesome6 
            name={"backward"} 
            size={size} 
            color={colors.iconPrimary} 
        />
        </TouchableOpacity>
    )
};

export const PlayPauseButton = ({ size = iconSizes.lg }) => {
    const { colors } = useTheme();

    const { playing } = useIsPlaying();

    const handleTogglePlay = () => {
        if(playing) {
            TrackPlayer.pause();
        } else {
            TrackPlayer.play();
        }
    }
    return(
        <TouchableOpacity activeOpacity={0.85} onPress={handleTogglePlay}>
            <Feather 
                name={ playing? "pause" : "play" }
                size={size} 
                color={colors.iconPrimary} 
            />
        </TouchableOpacity>
    )
};

export const GoToNextButton = ({ size = iconSizes.lg }) => { 
    const { colors } = useTheme();

    const handleGoToNext = () => {
        TrackPlayer.skipToNext();
    } 
    return(
        <TouchableOpacity activeOpacity={0.85} onPress={handleGoToNext}>
            <FontAwesome6 
            name={"forward"} 
            size={size} 
            color={colors.iconPrimary} 
        />
        </TouchableOpacity>
    )
};