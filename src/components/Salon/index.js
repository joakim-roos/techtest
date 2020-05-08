import React from 'react'
import { useParams } from 'react-router-dom'
import { IMAGE, IMAGE2X, IMAGE3X } from '../../constants/assets'

export const SalonImage = () => (
  <img
    srcSet={`
      ${IMAGE3X} 3x,
      ${IMAGE2X} 2x,
      ${IMAGE} 1x,
      `}
    src={IMAGE3X}
    alt='A womans long hair is caught by the wind'
  >
  </img>
)

function Salon(props) {
  let { slug } = useParams()

  return (
    <div>
      <SalonImage />
      <p>Salon: {slug}</p>
    </div>
  )
}

export default Salon