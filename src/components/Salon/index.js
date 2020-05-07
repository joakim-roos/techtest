import React from 'react'
import { useParams } from 'react-router-dom'
import { SalonImage } from '../../assets/images'


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