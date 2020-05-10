import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as S from './styles'
import axios from 'axios'

import { ARROW_LEFT_WHITE, HEART } from '../../constants/assets'

import { API_URL } from '../../constants/routes'

import DetailsSection from './DetailsSection'
import StarRating from '../StarRating'
import Image from './Image'


const Item = ({ src, alt, style }) => (
  <img style={style} src={src} alt={alt}></img>
)

function Salon() {
  const [pageData, setPageData] = useState({})
  let { slug } = useParams()

  let salonData = pageData[0]

  useEffect(() => {
    const fetchPageData = () => {
      axios.get(`${API_URL}/salons/?slug=${slug}`)
        .then(res => {
          setPageData(res.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
    fetchPageData()
  }, [slug])


  return (
    <>
      <S.Container>
        <Image />
        <S.Gradient />

        <S.Wrapper>
          <S.Header>
            <S.StyledLink to='/salons'>
              <Item style={{ marginTop: '1px' }} src={ARROW_LEFT_WHITE} alt={'go back'} />
            </S.StyledLink>

            <div>
              <Item src={HEART} alt={'make favourite'}></Item>
            </div>
          </S.Header>

          <S.TitleContainer>

            {salonData &&
              <>
                <S.PageTitle>{salonData.name}</S.PageTitle>
                <StarRating stars={salonData.stars} totalStars={5}></StarRating>
              </>
            }
          </S.TitleContainer>

        </S.Wrapper>
      </S.Container>

      <S.LinkWrapper>
        <S.SectionLink to='#detail-section'>Info</S.SectionLink>
        <S.SectionLink to='#schema-section'>Schema</S.SectionLink>
      </S.LinkWrapper>

      <DetailsSection salonData={salonData} />

    </>
  )
}

export default Salon