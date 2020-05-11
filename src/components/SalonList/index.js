import React, { useState, useEffect, useMemo } from 'react';
import FilterSalons from '../FilterDropdown'
import StarRating from '../StarRating'
import { Link } from 'react-router-dom';

import { ARROW_LEFT_LG, FILTER, ARROW_RIGHT_SM } from '../../constants/assets'
import * as S from './styles'

import Header from '../Header'

const Item = ({ src, alt }) => (
  <img src={src} alt={alt}></img>
)

function SalonList(props) {
  const [filterValue, setFilterValue] = useState('')
  const [filteredSalons, setFilteredSalons] = useState([])

  const filterHandler = (e) => {
    setFilterValue(e)
  }

  // Filter through the allSalons-prop and returns the filtered data. 
  // filterValue is the value from the FilterDropdown-component. 
  useEffect(() => {
    function filterSalons(minValue, maxValue) {
      let result = props.allSalons.filter(salon =>
        salon.price > minValue && salon.price <= maxValue)
      setFilteredSalons(result)
    }
    let value = filterValue.value
    if (value === '0-250') {
      filterSalons(0, 250)
    } else if (value === '250-500') {
      filterSalons(250, 500)
    } else if (value === '500-750') {
      filterSalons(500, 750)
    } else {
      setFilteredSalons(props.allSalons)
    }
  }, [filterValue, props.allSalons])

  return (
    <div>
      <div style={{ position: 'sticky', top: '0' }}>
        <Header
          LinkTo={'#'}
          srcLeft={ARROW_LEFT_LG}
          altLeft={'Go Back'}
          srcRight={FILTER}
          altRight={'Filter Button'}
        >
          <S.PageTitle>Hår</S.PageTitle>
        </Header>
        <FilterSalons
          allSalons={props.allSalons}
          filterHandler={filterHandler}
        />
      </div>

      {filteredSalons && filteredSalons.map(salon =>
        <Link
          key={salon.id}
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
              <Item src={ARROW_RIGHT_SM} alt={'Go to salon'} />
            </S.SalonRight>
          </S.SalonContainer>
        </Link>
      )
      }
    </div >
  )
}


export default SalonList