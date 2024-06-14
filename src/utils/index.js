export const formatSecondsToMinute = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    //used padstart as it adds 0 before ...
    const formatedMinutes = String(minutes).padStart(2, "0");

    const formatedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formatedMinutes}:${formatedSeconds}`;
};

export const isLikedSongExists = (songs, track) => {
    return songs.some(song => song.url === track.url);
}