import './ImageList.css'
import React from 'react'

const ImageList = ({ images }) => {
  const imageList = images.map(({ id, description, urls }) => (
    <img
      key={id}
      src={urls.regular}
      alt={description}
      className="image-list__img"
    />
  ))

  return <div className="image-list">{imageList}</div>
}

export default ImageList
