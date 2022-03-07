export const Routes = {
    get: {
        playlist: (id) => `users/${id}/playlists`,
        clipsFollowed: (id) => `users/${id}/audio_clips/followed`,
        clipById: (id) => `audio_clips/${id}`,
        clipsPopular: '/audio_clips/popular',
        channelsRecomended: '/channels/recommended',
        channelById: (id) => `channels/${id}`,
        clipsByChannel: (id) => `/channels/${id}/audio_clips`
    },

}