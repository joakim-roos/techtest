import React from 'react'
import { useParams, Link } from 'react-router-dom'
import * as S from './styles'
import { IMAGE, IMAGE2X, IMAGE3X } from '../../constants/assets'
import { ARROW_LEFT_WHITE, HEART } from '../../constants/assets'
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

const PageTitle = styled.h1`
font-family: 'MillerBanner Light';
font-size: ${props => props.theme.fontSize.lg};
color: ${props => props.theme.colors.white};
font-weight: normal;
`;

const Wrapper = styled.div`
position: absolute;
top: 0;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
`;

const LinkWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

> a:first-child {
  border-bottom: 2px solid ${props => props.theme.colors.gold}
}
`;

const StyledLink = styled(Link)`
font-size: ${props => props.theme.fontSize.sm};
text-decoration: none;
width: 50%;
text-align: center;
padding: 1rem;
cursor: pointer;
`;

const Container = styled.div`
position: relative;
`;
const TitleContainer = styled.div`
padding: 1rem 1rem 0 1rem;
`;


const Item = ({ src, alt, style }) => (
  <img style={style} src={src} alt={alt}></img>
)

function Salon(props) {
  let { slug } = useParams()

  return (
    <>
      <Container>
        <StyledImage />

        <Wrapper>
          <S.Header>
            <S.StyledLink to='#'>
              <Item style={{ marginTop: '1px' }} src={ARROW_LEFT_WHITE} alt={'go back'} />
            </S.StyledLink>

            <div style={{ padding: '1rem' }}>
              <Item src={HEART} alt={'make favourite'}></Item>
            </div>
          </S.Header>

          <TitleContainer>
            <PageTitle>Salon Namn</PageTitle>
            <StarRating totalStars={5} />
          </TitleContainer>


        </Wrapper>
      </Container>

      <LinkWrapper>
        <StyledLink to='#detail-section'>Info</StyledLink>
        <StyledLink to='#schema-section'>Schema</StyledLink>
      </LinkWrapper>

      <section id='detail-section'>
        info
        </section>
    </>
  )
}

export default Salon