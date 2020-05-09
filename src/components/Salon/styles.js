import React from 'react'
import styled from 'styled-components'

export const Header = styled.header`
display: flex;
background-color: white;
opacity: 0;
justify-content: space-between;
border-bottom: 1px solid ${props => props.theme.colors.gold};
font-family: 'MillerBanner Light';
`;