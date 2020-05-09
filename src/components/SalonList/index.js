import React from 'react';
import FilterSalons from '../FilterDropdown'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import * as Constant from '../../constants/assets'
import * as S from './styles'




const ArrowRightItem = () => (
  <S.Img src={Constant.ARROW_RIGHT_SM} alt='Go back'></S.Img>
)

const ArrowLeftItem = () => (
  <S.Img src={Constant.ARROW_LEFT_LG} alt='Go to salon'></S.Img>
)

const FilterItem = () => (
  <S.Img src={Constant.FILTER} alt='Filter Salons'></S.Img>
)


const StarRating = (props) => (
  <S.StarRating>
    {props.children}
  </S.StarRating>
)



function SalonList(props) {
  /* const [filterRange, setFilterRange] = useState([])
  const [filteredSalons, setFilteredSalons] = useState({}) */
  return (
    <div>
      <div style={{ position: 'sticky', top: '0' }}>
        <S.Header>
          <S.StyledLink to='#'>
            <ArrowLeftItem />
          </S.StyledLink>
          <S.PageTitle>Hår</S.PageTitle>
          <S.StyledLink to='#'>
            <FilterItem />
          </S.StyledLink>
        </S.Header>
        <FilterSalons allSalons={props.allSalons} />
      </div>

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