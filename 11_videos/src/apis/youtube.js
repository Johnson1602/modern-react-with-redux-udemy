import axios from 'axios'

const KEY = 'AIzaSyBVCreb5fPkWmHWetgYr7S_N9oInipCVF0'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY,
    part: 'snippet',
    type: 'video',
    maxResults: 5,
  },
})
