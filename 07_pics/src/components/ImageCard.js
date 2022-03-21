import React from 'react'

const ImageCard = (props) => {
  const { description, urls } = props.image
  return (
    <div className="image-list__card">
      <img src={urls.regular} alt={description} className="image-list__img" />
    </div>
  )
}

export default ImageCard
