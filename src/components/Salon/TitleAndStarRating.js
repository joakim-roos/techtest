import React from 'react';
import styled from 'styled-components';
import * as S from './styles'
import StarRating from '.././StarRating'

const TitleAndStarRating = ({ salonData }) => (
  <>
    <S.TitleContainer>

      {salonData &&
        <>
          <S.PageTitle>{salonData.name}</S.PageTitle>
          <StarRating
            stars={salonData.stars}
            totalStars={5}
            infoPage
          >
            {salonData.reviews}
          </StarRating>
        </>
      }
    </S.TitleContainer>
  </>
)

export default TitleAndStarRating