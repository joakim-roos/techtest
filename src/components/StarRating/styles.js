import styled from 'styled-components'

export const StarRating = styled.div`
display: flex;
padding: ${props => props.infoPage
    ?
    '0.4rem 0 1.2rem 0'
    :
    '0.9rem 0 0.9rem 0'
  };

> div {
font-weight: 300;

font-size: ${props => props.infoPage
    ?
    props.theme.fontSize.xs
    :
    props.theme.fontSize.xxs
  };

color: ${props => props.infoPage
    ?
    props.theme.colors.white
    :
    props.theme.colors.font_primary
  };
}
`;

export const Img = styled.img`
padding-right: 0.3rem; 
`;