import React from 'react'
import { useParams } from 'react-router-dom'
import * as S from './styles'
import { IMAGE, IMAGE2X, IMAGE3X } from '../../constants/assets'
import { ARROW_LEFT_WHITE, HEART } from '../../constants/assets'
import { PIN, PHONE, GLOBE, CLOCK } from '../../constants/assets'
import StarRating from '../StarRating'
import styled from 'styled-components'

const Image = ({ className }) => (
  <img
    className={className}
    srcSet={`
      ${IMAGE3X} 3x,
      ${IMAGE2X} 2x,
      ${IMAGE} 1x,
      `}
    src={IMAGE3X}
    alt='A womans long hair is caught by the wind'
  >
  </img>
)

const StyledImage = styled(Image)`
display: block;
width: 100%;
`;

const Item = ({ src, alt, style }) => (
  <img style={style} src={src} alt={alt}></img>
)

function Salon(props) {
  let { slug } = useParams()

  return (
    <>
      <S.Container>
        <StyledImage />

        <S.Wrapper>
          <S.Header>
            <S.StyledLink to='#'>
              <Item style={{ marginTop: '1px' }} src={ARROW_LEFT_WHITE} alt={'go back'} />
            </S.StyledLink>

            <div>
              <Item src={HEART} alt={'make favourite'}></Item>
            </div>
          </S.Header>

          <S.TitleContainer>
            <S.PageTitle>Salon Namn</S.PageTitle>
            <StarRating totalStars={5} />
          </S.TitleContainer>


        </S.Wrapper>
      </S.Container>

      <S.LinkWrapper>
        <S.SectionLink to='#detail-section'>Info</S.SectionLink>
        <S.SectionLink to='#schema-section'>Schema</S.SectionLink>
      </S.LinkWrapper>

      <S.DetailsSection>
        <div>
          <Item src={PIN}></Item>
          <p>asdsda</p>
        </div>
        <div>
          <Item src={CLOCK}></Item>
        </div>
        <div>
          <Item src={PHONE}></Item>
        </div>
        <div>
          <Item src={GLOBE}></Item>
        </div>
        <div>
          <p>aasdasdadad</p>
        </div>
      </S.DetailsSection>
    </>
  )
}

export default Salon