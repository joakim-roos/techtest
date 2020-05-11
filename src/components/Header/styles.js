import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = styled.header`
display: flex;
justify-content: space-between;
width: 100%;
background-color: ${props => props.isTransparent ? '' : 'white'};
font-family: 'MillerBanner Light';

> div:last-child {
  padding: 1rem;
}
`;

export const StyledLink = styled(Link)`
padding: 1rem;
display: flex;
`;

