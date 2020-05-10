import React from 'react'
import * as S from './styles'

import { PIN, PHONE, GLOBE, CLOCK } from '../../constants/assets'

const Item = ({ src, alt, style }) => (
  <img style={style} src={src} alt={alt}></img>
)

// InfoSection renders all the data for the selected hairsalon. 
const InfoSection = ({ salonData }) => {
  return (
    <>
      {
        salonData &&
        <S.InfoSection>
          <div>
            <Item src={PIN}></Item>
            <p>{salonData.address}, {salonData.postalcode} {salonData.city}</p>
          </div>
          <div>
            <Item src={CLOCK}></Item>
            <p>{`Öppet till ${salonData.openuntil}`}</p>
          </div>
          <div>
            <Item src={PHONE}></Item>
            <p>{salonData.phone}</p>
          </div>
          <div>
            <Item src={GLOBE}></Item>
            <p>{salonData.url}</p>
          </div>
          <div>
            <p>{salonData.info}</p>
          </div>
        </S.InfoSection>
      }
    </>
  )
}

export default InfoSection;