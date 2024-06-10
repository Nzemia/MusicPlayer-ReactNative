import { electronic, mixes, NewRelease, RecommendedSongs, trap } from "./songs";

export const SongsWithCategory = [
    {
        title: "Recommended For You",
        songs: RecommendedSongs,
    },
    {
        title: "New Releases",
        songs: NewRelease,
    },
    {
        title: "Electronic",
        songs: electronic,
    },
    {
        title: "Trap",
        songs: trap,
    },
    {
        title: "Mixes",
        songs: mixes,
    },
]