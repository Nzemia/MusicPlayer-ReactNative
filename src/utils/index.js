export const formatSecondsToMinute = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    //used padstart as it adds 0 before ...
    const formatedMinutes = String(minutes).padStart(2, "0");

    const formatedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formatedMinutes}:${formatedSeconds}`;
}