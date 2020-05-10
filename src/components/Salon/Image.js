import React from 'react'
import styled from 'styled-components';

import { IMAGE, IMAGE2X, IMAGE3X } from '../../constants/assets'
const Image = ({ className }) => (
  <StyledImage
    className={className}
    srcSet={`
      ${IMAGE3X} 3x,
      ${IMAGE2X} 2x,
      ${IMAGE} 1x,
      `}
    src={IMAGE3X}
    alt='A womans long hair is caught by the wind'
  >
  </StyledImage>
)

const StyledImage = styled.img`
display: block;
width: 100%;
z-index: -1000;
`;


export default Image;