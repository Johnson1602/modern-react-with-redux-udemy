import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    {
      title: 'Love Letter',
      duration: '4:13',
    },
    {
      title: 'Easy Come Easy Go',
      duration: '3:00',
    },
    {
      title: 'Less Than Zero',
      duration: '3:32',
    },
    {
      title: 'Better Days',
      duration: '3:14',
    },
    {
      title: 'Let Somebody Go',
      duration: '4:02',
    },
  ]
}

const selectSongReducer = (currentSelectedSong = null, action) => {
  if (action.type === 'SELECT_SONG') {
    return action.payload
  }

  return currentSelectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer,
})
