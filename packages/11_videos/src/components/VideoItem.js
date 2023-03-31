import './VideoItem.css'
import React from 'react'

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="item video__item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image video__image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <span className="header">{video.snippet.title}</span>
      </div>
    </div>
  )
}

export default VideoItem
