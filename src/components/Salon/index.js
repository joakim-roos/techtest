import React from 'react'
import { useParams } from 'react-router-dom'
import * as S from './styles'
import { IMAGE, IMAGE2X, IMAGE3X } from '../../constants/assets'
import { ARROW_LEFT_WHITE, HEART } from '../../constants/assets'
import StarRating from '../StarRating'
import styled from 'styled-components'

export const BackgroundImage = () => (
  <img
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

/* const Background = styled.div`
background-image: url(${IMAGE3X});
background-size: contain;
background-repeat: no-repeat;
`; */

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

const Button = styled.button`
width: 50%;
padding: 1rem;
font-size: ${props => props.theme.fontSize.sm};
background-color: ${props => props.theme.colors.bg_primary};
border: none;
`;

const Item = ({ src, alt, style }) => (
  <img style={style} src={src} alt={alt}></img>
)

function Salon(props) {
  let { slug } = useParams()

  return (
    <>
      <div style={{ position: 'relative' }}>
        <BackgroundImage />

        <Wrapper>
          <S.Header>
            <S.StyledLink to='#'>
              <Item style={{ marginTop: '1px' }} src={ARROW_LEFT_WHITE} alt={'go back'} />
            </S.StyledLink>

            <div style={{ padding: '1rem' }}>
              <Item src={HEART} alt={'make favourite'}></Item>
            </div>
          </S.Header>

          <div style={{ padding: '0.4rem' }}>
            <PageTitle>Salon Namn</PageTitle>
            <StarRating totalStars={5} />
          </div>


        </Wrapper>
      </div>

      <div>
        <Button>Info</Button>
        <Button>Schema</Button>
      </div>
    </>
  )
}

export default Salon