import React from 'react'

const VideoItem = ({ video }) => {
  return (
    <div>
      <img src={video.snippet.thumbnails.medium.url} />
      <span>{video.snippet.title}</span>
    </div>
  )
}

export default VideoItem
