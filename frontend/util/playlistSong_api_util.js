export const addToPlaylist = (payload) => (
  $.ajax({
    method: `POST`,
    url: `/api/playlist_songs`,
    data: {playlist_song: {song_id: payload.songId, playlist_id: payload.playlistId}}
  })
)

export const removeFromPlaylist = (psId) => (
  $.ajax({
    method: `DELETE`,
    url: `/api/playlist_songs/${psId}`
  })
)