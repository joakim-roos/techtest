import styled from 'styled-components';

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

> p:first-child {
  font-family: 'MillerBanner Light';
  font-size: ${props => props.theme.fontSize.md};
  line-height: 0.8;
}

> p:last-child {
  font-size: ${props => props.theme.fontSize.sm};
  color: ${props => props.theme.colors.font_secondary};
}
`;

export const SalonMidRight = styled.div`
  font-size: ${props => props.theme.fontSize.sm};
  
  
 p:last-child {
   font-size: ${props => props.theme.fontSize.xs};
   color: ${props => props.theme.colors.font_secondary};
   margin: 0.7rem 0 0.7rem 0;
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

export const Img = styled.img`
vertical-align: middle;
`;

export const PageTitle = styled.h3`
padding: 1rem;
font-size: ${props => props.theme.fontSize.lg};
font-family: 'MillerBanner Light';
font-weight: 300;
margin: 0;
`;

export const Paragraph = styled.p`
margin: 0px;
`;

export const StarRating = styled.div`
margin: 0.5rem 0 0.5rem 0;
`;