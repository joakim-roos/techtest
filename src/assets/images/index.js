import React from 'react'

import image from '../images/image.jpg'
import image2x from '../images/image@2x.jpg'
import image3x from '../images/image@3x.jpg'


export const SalonImage = () => (
  <img
    srcSet={`
      ${image3x} 3x,
      ${image2x} 2x,
      ${image} 1x,
      `}
    src={image2x}
    alt='A womans long hair is caught by the wind'
  >
  </img>
)
