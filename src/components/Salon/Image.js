import React from 'react'
import * as S from './styles';


// Returns an Image, letting the browser/ui decide which picture quality to use. 
import { IMAGE, IMAGE2X, IMAGE3X } from '../../constants/assets'
const Image = ({ className }) => (
  <S.StyledImage
    className={className}
    srcSet={`
      ${IMAGE3X} 3x,
      ${IMAGE2X} 2x,
      ${IMAGE} 1x,
      `}
    src={IMAGE3X}
    alt='A womans long hair is caught by the wind'
  >
  </S.StyledImage>
)


export default Image;