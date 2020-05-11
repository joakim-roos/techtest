import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as S from './styles'
import axios from 'axios'

import { ARROW_LEFT_WHITE, HEART } from '../../constants/assets'
import { API_URL, SALON_SLUG } from '../../constants/routes'

import Header from '../Header'
import InfoSection from './InfoSection'
import TitleAndStarRating from './TitleAndStarRating'
import Image from './Image'

function Salon() {
  const [pageData, setPageData] = useState({})
  let { slug } = useParams()

  // fetches page-data to be rendered depending on which salon the user clicked on. 
  useEffect(() => {
    const fetchPageData = () => {
      axios.get(`${API_URL}${SALON_SLUG}${slug}`)
        .then(res => {
          setPageData(res.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
    fetchPageData()
  }, [slug])

  let salonData = pageData[0]
  return (
    <>
      <S.Container>
        <Image />
        <S.Gradient />
        <S.Wrapper>
          <Header
            LinkTo={'/salons'}
            srcLeft={ARROW_LEFT_WHITE}
            styleLeft={{ marginTop: '1px' }}
            altLeft={'Go Back'}
            srcRight={HEART}
            styleRight={{ padding: '1rem' }}
            altRight={'Make Favourite'}
            isTransparent
          >
          </Header>
          <TitleAndStarRating salonData={salonData} />
        </S.Wrapper>
      </S.Container>

      <S.LinkWrapper>
        <S.SectionLink to='#'>Info</S.SectionLink>
        <S.SectionLink to='#'>Schema</S.SectionLink>
      </S.LinkWrapper>

      <InfoSection salonData={salonData} />
    </>
  )
}

export default Salon