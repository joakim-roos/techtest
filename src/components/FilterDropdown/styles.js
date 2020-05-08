import styled from 'styled-components';


export const DropdownBox = styled.div`
  font-family: 'Helvetica Neue';
  position: relative;
`;

export const DropdownButton = styled.div`
  padding: 1rem;
  border: none;
  width: 100%;
  font-size: ${props => props.theme.fontSize.sm};
  border-bottom: 1px solid ${props => props.theme.colors.gold};
  cursor: pointer; 
`;


export const DropdownContent = styled.div`
  position: absolute;
  z-index: 100%;
  font-size: ${props => props.theme.fontSize.sm};
  display: ${props => props.open ? 'block' : 'none'};

  div:last-child {
    border-bottom: 1px solid ${props => props.theme.colors.gold};
  }
`;

export const Selection = styled.div`
  padding: 1rem;
  background-color: white;
  min-width: 100vw;
  border-bottom: 1px solid ${props => props.theme.colors.border_light};
  cursor: pointer; 
`;