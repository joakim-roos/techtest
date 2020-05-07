import React from 'react'
import { useParams } from 'react-router-dom'

function Salon(props) {
  let { slug } = useParams()

  return (
    <div>
      <p>Salon: {slug}</p>
    </div>
  )
}

export default Salon