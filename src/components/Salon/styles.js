
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
display: flex;
justify-content: space-between;
width: 100%;
/* background-color: white;  */
/* border-bottom: 1px solid ${props => props.theme.colors.gold}; */
font-family: 'MillerBanner Light';
`;

export const StyledLink = styled(Link)`
padding: 1rem;
display: flex;
`;