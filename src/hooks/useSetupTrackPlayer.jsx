import { useEffect, useRef } from "react";
import TrackPlayer, { Capability, RatingType, RepeatMode } from "react-native-track-player";

const setupPlayer = async() => {
    await TrackPlayer.setupPlayer({
        maxCacheSize: 1024 * 10,
    });
    await TrackPlayer.updateOptions({
        ratingType: RatingType.Heart,
        //capabilities, used to display the song in notification box
        capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.Stop,            
        ],
        compactCapabilities: [Capability.Play, Capability.Pause],
    });
    await TrackPlayer.setVolume(0.5);
    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}



export const useSetupPlayer = ({ onLoad }) => {
    const isInitialized = useRef(false);

    // logic for set up player
    useEffect(() => {
        setupPlayer().then(() => {
            isInitialized.current = true;
            onLoad();                    
        }).catch((error) => {
            isInitialized.current = false;
            console.log("error", error)
        })
    }, [])

}