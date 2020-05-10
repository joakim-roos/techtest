import React, { useState, useEffect } from 'react';
import FilterSalons from '../FilterDropdown'
import StarRating from '../StarRating'
import { Link } from 'react-router-dom';

import * as Constant from '../../constants/assets'
import * as S from './styles'

const Item = ({ src, alt }) => (
  <img src={src} alt={alt}></img>
)

function SalonList(props) {
  const [filterValue, setFilterValue] = useState('')
  const [filteredSalons, setFilteredSalons] = useState([])

  const filterHandler = (e) => {
    setFilterValue(e)
  }

  useEffect(() => {
    let value = filterValue.value
    /* if (filterValue === '') return; */
    let result;
    if (value === '0-250') {
      result = props.allSalons.filter(salon => salon.price > 0 && salon.price <= 250)
      setFilteredSalons(result)
      console.log(result)
    } else if (value === '250-500') {
      result = props.allSalons.filter(salon => salon.price > 250 && salon.price <= 500)
      setFilteredSalons(result)
      console.log(result)
    } else if (value === '500-750') {
      result = props.allSalons.filter(salon => salon.price > 500 && salon.price <= 750)
      setFilteredSalons(result)
      console.log(result)
    } else {
      result = props.allSalons
      setFilteredSalons(result)
      console.log(result)
    }
  }, [filterValue, props.allSalons])



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

        <FilterSalons
          allSalons={props.allSalons}
          filterHandler={filterHandler}
        />
      </div>

      {filteredSalons && filteredSalons.map(salon =>
        <Link
          key={salon.slug}
          to={`/salons/${salon.slug}`}
          style={{ textDecoration: 'none' }}
        >
          <S.SalonContainer>

            <S.SalonLeft>
              <S.Paragraph>{salon.availabletime}</S.Paragraph>
            </S.SalonLeft>

            <S.SalonMid>
              <S.SalonName>{salon.name}</S.SalonName>

              <StarRating
                stars={salon.stars}
                totalStars={5}
              >
                {salon.reviews}
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
        </Link>
      )
      }
    </div >
  )
}


export default SalonList