import React from 'react';
import styled from 'styled-components'

const SalonContainer = styled.div`
  display: flex; 
  font-family: 'MillerBanner Light';
  margin: 0 15px 0 15px;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
`;
const SalonLeft = styled.div`

`;

const SalonMid = styled.div`
flex: 1;
`;

const SalonMidRight = styled.div`

`;

const SalonRight = styled.div`
display: flex;
align-items: center;
`;


function SalonList(props) {

  return (
    <div>
      {props.allSalons.map(salon =>
        <SalonContainer key={salon.id}>
          <SalonLeft>
            <p>12:00</p>
          </SalonLeft>
          <SalonMid>
            <p>{salon.name}</p>
            <p>{salon.stars}</p>
            <p>{`${salon.address} ${salon.postalcode} ${salon.city}`}</p>
          </SalonMid>

          <SalonMidRight>
            <p>{salon.price}{salon.unit}</p>
            <p>30 min</p>
          </SalonMidRight>

          <SalonRight>
            logo
          </SalonRight>
        </SalonContainer>
      )}
    </div>
  )
}


export default SalonList