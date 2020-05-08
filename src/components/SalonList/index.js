import React, { useEffect, useState } from 'react';
import FilterSalons from '../FilterDropdown'

import * as Constant from '../../constants/assets'
import * as S from './styles'


const ArrowRightItem = () => (
  <div style={{ display: 'flex' }}>
    <S.Img src={Constant.ARROW_RIGHT_SM} alt='Go back'></S.Img>
  </div>
)

const ArrowLeftItem = () => (
  <div style={{ display: 'flex' }}>
    <S.Img src={Constant.ARROW_LEFT_LG} alt='Go to salon'></S.Img>
  </div>
)

const FilterItem = () => (
  <div style={{ display: 'flex' }}>
    <S.Img src={Constant.FILTER} alt='Filter Salons'></S.Img>
  </div>
)




const StarRating = (props) => (
  <S.StarRating>
    {props.children}
  </S.StarRating>
)



function SalonList(props) {
  const [filterRange, setFilterRange] = useState([])
  const [filteredSalons, setFilteredSalons] = useState({})
  return (
    <div>
      <S.Header>
        <ArrowLeftItem />
        <S.PageTitle>Hår</S.PageTitle>
        <FilterItem />
      </S.Header>

      <FilterSalons allSalons={props.allSalons}>

      </FilterSalons>

      {props.allSalons.map(salon =>
        <S.SalonContainer key={salon.id}>

          <S.SalonLeft>
            <S.Paragraph>{salon.availabletime}</S.Paragraph>
          </S.SalonLeft>

          <S.SalonMid>
            <S.Paragraph>{salon.name}</S.Paragraph>
            <StarRating>
              <S.Paragraph>{salon.stars}</S.Paragraph>
            </StarRating>
            <S.Paragraph>{salon.address}</S.Paragraph>
          </S.SalonMid>

          <S.SalonMidRight>
            <S.Paragraph>{salon.price} {salon.unit}</S.Paragraph>
            <S.Paragraph>{salon.duration}</S.Paragraph>
          </S.SalonMidRight>

          <S.SalonRight>
            <ArrowRightItem />
          </S.SalonRight>

        </S.SalonContainer>
      )}
    </div>
  )
}


export default SalonList