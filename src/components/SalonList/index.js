import React from 'react';
import styled from 'styled-components'
import Theme from '../../Theme'
import * as Constant from '../../constants/assets'

const SalonContainer = styled.div`
  display: flex; 
  font-family: 'MillerBanner Light';
  margin: 0 1rem 0 1rem;
  padding: 1rem 0 1rem 0;
  border-bottom: 1px solid grey;
`;

const SalonLeft = styled.div`

`;

const SalonMid = styled.div`
margin-left: 1rem;
flex: 1;
`;

const SalonMidRight = styled.div`

`;

const SalonRight = styled.div`
display: flex;
align-items: center;
`;

const Header = styled.header`
display: flex;
justify-content: space-between;
padding: 15px;
border-bottom: 1px solid ${props => props.theme.colors.gold};
font-family: 'MillerBanner Light';
`;

const Img = styled.img`
vertical-align: middle;
`;

const PageTitle = styled.h3`
font-size: ${props => props.theme.fontSize.lg};
font-weight: 300;
margin: 0;
`;

const P = styled.p`
margin: 0px;
`;


const ArrowRightItem = () => (
  <div style={{ display: 'flex' }}>
    <Img src={Constant.ARROW_RIGHT_SM} alt='Go back'></Img>
  </div>
)

const ArrowLeftItem = () => (
  <div style={{ display: 'flex' }}>
    <Img src={Constant.ARROW_LEFT_LG} alt='Go to salon'></Img>
  </div>
)

const FilterItem = () => (
  <div style={{ display: 'flex' }}>
    <Img src={Constant.FILTER} alt='Filter Salons'></Img>
  </div>
)


const FilterSalons = () => (
  <div>

  </div>
)

function SalonList(props) {

  return (
    <div>
      <Header>
        <ArrowLeftItem />
        <PageTitle>Hår</PageTitle>
        <FilterItem />
      </Header>

      {props.allSalons.map(salon =>
        <SalonContainer key={salon.id}>

          <SalonLeft>
            <P>{salon.availabletime}</P>
          </SalonLeft>

          <SalonMid>
            <P>{salon.name}</P>
            <P>{salon.stars}</P>
            <P>{`${salon.address} ${salon.postalcode} ${salon.city}`}</P>
          </SalonMid>

          <SalonMidRight>
            <P>{salon.price}{salon.unit}</P>
            <P>{salon.duration}</P>
          </SalonMidRight>

          <SalonRight>
            <ArrowRightItem />
          </SalonRight>

        </SalonContainer>
      )}
    </div>
  )
}


export default SalonList