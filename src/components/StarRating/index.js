import React, { useState, useEffect } from 'react';
import * as S from '../StarRating/styles'
import { STAR, STAR_FILL } from '../../constants/assets'


const StarItem = (props) => (
  <img src={props.selected ? STAR : STAR_FILL} alt='star'></img>
)

function StarRating({ totalStars, stars, children }) {

  return (
    <S.StarRating>

      {[...Array(totalStars)].map((n, index) =>
        <StarItem
          key={index}
          selected={index < stars} >
        </StarItem>)
      }

      {children}
    </S.StarRating >
  )
}

export default StarRating