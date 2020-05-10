import styled from 'styled-components'

export const StarRating = styled.div`
padding: 0.9rem 0 0.9rem 0;
display: flex;
> div {
font-weight: 300;
font-size: ${props => props.smallText
    ?
    props.theme.fontSize.xxs
    :
    props.theme.fontSize.xs
  };
color: ${props => props.smallText
    ?
    props.theme.colors.font_primary
    :
    props.theme.colors.white
  };
}
`;

export const Img = styled.img`
padding-right: 0.3rem; 
`;