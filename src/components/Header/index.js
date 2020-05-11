import React from 'react';
import * as S from './styles'
import { useLocation } from 'react-router-dom';

const Header = (props) => {
  let location = useLocation()
  return (
    <S.Header>
      <S.StyledLink to={props.LinkTo}>
        <img
          style={props.styleLeft}
          src={props.srcLeft}
          alt={props.altLeft}
        />
      </S.StyledLink>
      {props.children}
      {location.pathname === '/salons'
        ?
        <S.StyledLink to={props.LinkTo}>
          <img
            style={props.styleRight}
            src={props.srcRight}
            alt={props.altRight}
          />
        </S.StyledLink>
        :
        <img
          style={props.styleRight}
          src={props.srcRight}
          alt={props.altRight}
        />
      }
    </S.Header >
  )
}

export default Header