import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

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


const DropdownBox = styled.div`
  font-family: 'Helvetica Neue';
  position: relative;
`;

const DropdownButton = styled.div`
  padding: 1rem;
  border: none;
  width: 100%;
  font-size: ${props => props.theme.fontSize.sm};
  border-bottom: 1px solid ${props => props.theme.colors.gold};
  cursor: pointer; 
`;


const DropdownContent = styled.div`
  position: absolute;
  z-index: 100%;
  font-size: ${props => props.theme.fontSize.sm};
  display: ${props => props.open ? 'block' : 'none'};

  div:last-child {
    border-bottom: 1px solid ${props => props.theme.colors.gold};
  }
`;

const Selection = styled.div`
  padding: 1rem;
  background-color: white;
  min-width: 100vw;
  border-bottom: 1px solid ${props => props.theme.colors.border_light};
  cursor: pointer; 
`;

const FilterSalons = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = e => {
    setIsOpen(!isOpen)
  }

  return (
    <DropdownBox>
      <DropdownButton
        onClick={(e) => toggleOpen(e)}
      >
        Filter
      </DropdownButton>
      <DropdownContent open={isOpen}>
        <Selection>Alla</Selection>
        <Selection>Pris 0 - 250 kr</Selection>
        <Selection>Pris 250 - 500 kr</Selection>
        <Selection>Pris 500 - 750 kr</Selection>
      </DropdownContent>
    </DropdownBox>
  )
}

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