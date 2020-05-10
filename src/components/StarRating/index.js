import React from 'react';
import * as S from '../StarRating/styles'
import { STAR, STAR_FILL } from '../../constants/assets'


const StarItem = (props) => (
  <S.Img src={props.howManyStars ? STAR_FILL : STAR} alt='star'></S.Img>
)

function StarRating({ totalStars, stars, children, smallText }) {

  return (
    <S.StarRating smallText={smallText}>

      {[...Array(totalStars)].map((n, index) =>
        <StarItem
          key={index}
          howManyStars={index < stars} >
        </StarItem>)
      }
      <div>({children})</div>
    </S.StarRating >
  )
}

export default StarRating