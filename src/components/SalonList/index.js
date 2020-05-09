import React from 'react';
import FilterSalons from '../FilterDropdown'
import StarRating from '../StarRating'
import styled from 'styled-components'

import * as Constant from '../../constants/assets'
import * as S from './styles'



// make reusable? 
const ArrowRightItem = () => (
  <img src={Constant.ARROW_RIGHT_SM} alt='Go back'></img>
)

const ArrowLeftItem = () => (
  <img src={Constant.ARROW_LEFT_LG} alt='Go to salon'></img>
)

const FilterItem = () => (
  <img src={Constant.FILTER} alt='Filter Salons'></img>
)

const Item = ({ src, alt }) => (
  <img src={src} alt={alt}></img>
)


function SalonList(props) {
  /* const [filterRange, setFilterRange] = useState([])
  const [filteredSalons, setFilteredSalons] = useState({}) */
  return (
    <div>
      <div style={{ position: 'sticky', top: '0' }}>
        <S.Header>
          <S.StyledLink to='#'>
            <Item src={Constant.ARROW_LEFT_LG} alt={'Go back'} />
          </S.StyledLink>
          <S.PageTitle>Hår</S.PageTitle>
          <S.StyledLink to='#'>
            <Item src={Constant.FILTER} alt={'Filter Salons'} />
          </S.StyledLink>
        </S.Header>
        <FilterSalons allSalons={props.allSalons} />
      </div>

      {props.allSalons && props.allSalons.map(salon =>
        <S.SalonContainer key={salon.id}>

          <S.SalonLeft>
            <S.Paragraph>{salon.availabletime}</S.Paragraph>
          </S.SalonLeft>

          <S.SalonMid>
            <S.SalonName>{salon.name}</S.SalonName>

            <StarRating stars={salon.stars} totalStars={5}>
              {/* Reviews here */}
            </StarRating>
            <S.Paragraph>{salon.address}</S.Paragraph>
          </S.SalonMid>

          <S.SalonMidRight>
            <S.Paragraph>{salon.price} {salon.unit}</S.Paragraph>
            <S.Paragraph>{salon.duration}</S.Paragraph>
          </S.SalonMidRight>

          <S.SalonRight>
            <Item src={Constant.ARROW_RIGHT_SM} alt={'Go to salon'} />
          </S.SalonRight>

        </S.SalonContainer>
      )}
    </div>
  )
}


export default SalonList