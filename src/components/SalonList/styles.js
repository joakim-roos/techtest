import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SalonContainer = styled.div`
  display: flex; 
  font-family: 'Helvetica Neue';
  margin: 0 1rem 0 1rem;
  padding: 1rem 0 1rem 0;
  border-bottom: 1px solid ${props => props.theme.colors.border_light};
`;

export const SalonLeft = styled.div`
font-size: ${props => props.theme.fontSize.sm};
`;

export const SalonMid = styled.div`
margin-left: 1rem;
flex: 1;

> h3:first-child {
  font-family: 'MillerBanner Light';
  font-size: ${props => props.theme.fontSize.md};
  line-height: 0.8;
  font-weight: normal;
}

> p:last-child {
  font-size: ${props => props.theme.fontSize.sm};
  color: ${props => props.theme.colors.font_secondary};
}
`;

export const SalonMidRight = styled.div`
  font-size: ${props => props.theme.fontSize.sm};
  line-height: 1;

 p:last-child {
   font-size: ${props => props.theme.fontSize.xs};
   color: ${props => props.theme.colors.font_secondary};
   padding: 0.9rem 0 0.9rem 0;
   float: right;
 }
`;

export const SalonRight = styled.div`
display: flex;
align-items: center;
margin-left: 1.5rem;
`;

export const Header = styled.header`
display: flex;
background-color: white;
justify-content: space-between;
border-bottom: 1px solid ${props => props.theme.colors.gold};
font-family: 'MillerBanner Light';
`;


export const PageTitle = styled.h1`
padding: 1rem;
font-size: ${props => props.theme.fontSize.lg};
font-family: 'MillerBanner Light';
font-weight: 300;
margin: 0;
`;

export const Paragraph = styled.p`
margin: 0px;
`;

export const SalonName = styled.h3`
margin: 0px; 
`;

export const StyledLink = styled(Link)`
padding: 1rem;
display: flex;
`;
