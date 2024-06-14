import { create } from "zustand"
import { isLikedSongExists } from "../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";


const useLikeSongs = create((set) => ({
    likedSongs: [],
    addToLiked: async (newSong) => {
        set((state) => {
            // checking if the song exists or not ; to prevent multiple likes in a single song
            let isAlreadyLikedSongExists = isLikedSongExists(state.likedSongs, newSong);

            const updatedSongs = isAlreadyLikedSongExists
                ? state.likedSongs.filter((item) => item.url !== newSong.url)
                : [newSong, ...state.likedSongs]

            AsyncStorage.setItem("likedSongs", JSON.stringify(updatedSongs));

            return {
                likedSongs: updatedSongs,
            }
        })
    },

    loadLikedSongs: async() => {
        try {
            const likedSongs = await AsyncStorage.getItem("likedSongs");

            if(likedSongs) {
                set({ likedSongs:JSON.parse(likedSongs) });
            }
        } catch (error) {
            
        }
    }
}));

export default useLikeSongs;