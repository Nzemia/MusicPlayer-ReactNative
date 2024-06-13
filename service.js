const { default: TrackPlayer, Event } = require("react-native-track-player")

module.exports = async function() {
    TrackPlayer.addEventListener(Event.RemotePause, () => {
    console.log('Event.RemotePause');
    TrackPlayer.pause();
    });

    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        console.log('Event.RemotePlay');
        TrackPlayer.play();
    });

    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        console.log('Event.RemoteNext');
        TrackPlayer.skipToNext();
    });

    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        console.log('Event.RemotePrevious');
        TrackPlayer.skipToPrevious();
    });

    TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

    TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
}