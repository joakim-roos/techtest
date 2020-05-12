import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const StyledImage = styled.img`
display: block;
width: 100%;
z-index: -1000;
`;

export const PageTitle = styled.h1`
font-family: 'MillerBanner Light';
font-size: ${props => props.theme.fontSize.lg};
color: ${props => props.theme.colors.white};
font-weight: normal;
`;

export const Wrapper = styled.div`
position: absolute;
top: 0;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
`;

export const LinkWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding-bottom: 1.2rem;
background-color: #f9f9f9;

> a:first-child {
  border-bottom: 2px solid ${props => props.theme.colors.gold}
}
`;

export const SectionLink = styled(Link)`
background-color: ${props => props.theme.colors.white};
font-size: ${props => props.theme.fontSize.sm};
text-decoration: none;
width: 50%;
text-align: center;
padding: 1rem;
cursor: pointer;
`;

export const Container = styled.div`
position: relative;
`;

export const TitleContainer = styled.div`
padding: 1rem 1rem 0 1rem;
`;

export const InfoSection = styled.div`
margin: 0 1rem 0 1rem;
div {
  display: flex;
  padding: 1rem 0 1rem 0;
  background-color: ${props => props.theme.colors.bg_primary};
  border-bottom: 1px solid ${props => props.theme.colors.border_light};
}
/* > div:first-child {
  margin-top: 1rem;
} */
> div:last-child {
  border: none;
}
> div p {
  padding-left: 1rem;
}
> div:last-child p {
  margin-top: 0.5rem;
  padding-left: 0;
}
`;

export const Gradient = styled.div`
position: absolute;
bottom: 0px;
background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1));
width: 100%;
height: 60%;
`;