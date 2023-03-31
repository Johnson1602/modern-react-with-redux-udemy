// action creators
export const selectSong = (song) => {
  // return an action
  // type is required by action creators, payload is not required
  return {
    type: 'SELECT_SONG',
    payload: song,
  }
}
