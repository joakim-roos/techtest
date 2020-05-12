import React from 'react';
import * as S from './styles'
import StarRating from '.././StarRating'

// Returns the Page Title and StarRating-component for the Salon-component.



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