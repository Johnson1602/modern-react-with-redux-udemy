import React from 'react'

const ImageList = ({ images }) => {
  const imageList = images.map(({ id, description, urls }) => (
    <img key={id} src={urls.regular} alt={description} />
  ))

  return <div>{imageList}</div>
}

export default ImageList
