import React from 'react'
import { useParams } from 'react-router-dom'
import * as S from './styles'
import { IMAGE, IMAGE2X, IMAGE3X } from '../../constants/assets'

import styled from 'styled-components'

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

const Background = styled.div`
background-image: url(${IMAGE3X});
background-size: contain;
background-repeat: no-repeat;
height: 300px;

`;

function Salon(props) {
  let { slug } = useParams()

  return (
    <div>
      <Background>
        <S.Header>
          fgdfgd

        </S.Header>
      </Background>

    </div>
  )
}

export default Salon