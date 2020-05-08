import React from 'react';
import styled from 'styled-components'
import * as Constant from '../../constants/assets'

const SalonContainer = styled.div`
  display: flex; 
  font-family: 'MillerBanner Light';
  margin: 0 15px 0 15px;
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
`;

const Header = styled.header`
display: flex;
justify-content: space-between;
padding: 15px;
`;


const Arrow = () => (
  <div>
    <img src={Constant.ARROW_RIGHT_SM} alt='Go back'></img>
  </div>
)

const ArrowLeft = () => (
  <div>
    <img src={Constant.ARROW_LEFT_LG} alt='Go to salon'></img>
  </div>
)

const Filter = () => (
  <div>
    <img src={Constant.FILTER} alt='Filter Salons'></img>
  </div>
)

function SalonList(props) {

  return (
    <div>
      <Header>
        <ArrowLeft />
        <div>Hår</div>
        <Filter />
      </Header>
      {props.allSalons.map(salon =>
        <SalonContainer key={salon.id}>

          <SalonLeft>
            <p>{salon.availabletime}</p>
          </SalonLeft>

          <SalonMid>
            <p>{salon.name}</p>
            <p>{salon.stars}</p>
            <p>{`${salon.address} ${salon.postalcode} ${salon.city}`}</p>
          </SalonMid>

          <SalonMidRight>
            <p>{salon.price}{salon.unit}</p>
            <p>{salon.duration}</p>
          </SalonMidRight>

          <SalonRight>
            <Arrow />
          </SalonRight>

        </SalonContainer>
      )}
    </div>
  )
}


export default SalonList