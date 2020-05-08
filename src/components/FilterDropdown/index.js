
import React from 'react';
import Select, { components } from 'react-select';
import * as S from './styles'

import { ARROW_DOWN_SM } from '../../constants/assets'

/* const FilterSalons = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = e => {
    setIsOpen(!isOpen)
  }

  return (
    <S.DropdownBox>
      <S.DropdownButton
        onClick={(e) => toggleOpen(e)}
      >
        Filter
      </S.DropdownButton>
      <S.DropdownContent open={isOpen}>
        <S.Selection>Alla</S.Selection>
        <S.Selection>Pris 0 - 250 kr</S.Selection>
        <S.Selection>Pris 250 - 500 kr</S.Selection>
        <S.Selection>Pris 500 - 750 kr</S.Selection>
      </S.DropdownContent>
    </S.DropdownBox>
  )
} */

const filterOptions = [
  { value: 'all', label: 'Alla' },
  { value: '0-250', label: 'Pris 0 - 250 kr' },
  { value: '250-500', label: 'Pris 250 - 500 kr' },
  { value: '500-750', label: 'Pris 500 - 750 kr' },
];

//Override the react-select components default styling. 
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid #eeeeee',
    '&:first-child': { borderTop: '1px solid #eeeeee' },
    '&:last-child': {
      borderBottom: state.selectProps.menuIsOpen ? '1px solid #b69f58' : null
    },
    borderRadius: 0,
    padding: '1rem',
    backgroundColor: state.isSelected ? '#eeeeee' : 'white',
    color: '#202020',
    '&:hover': { backgroundColor: '#eeeeee', cursor: 'pointer' },
  }),

  control: (provided, state) => ({
    borderRadius: 0,
    display: 'flex',
    cursor: 'pointer',
    justifyContent: 'space-between',
    borderBottom: '1px solid #b69f58',
    fontFamily: 'Helvetica Neue',
    fontSize: '15px',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorsContainer: () => ({
    padding: '1rem',
    backgroundColor: 'white',
  }),
  dropdownIndicator: (provided, state) => ({
    padding: '0.5rem 0.2rem 0.5rem 0.2rem',
    transform: state.selectProps.menuIsOpen ? 'rotateZ(180deg)' : null,
  }),

  menu: (provided, state) => ({
    borderRadius: 0,
    fontSize: '15px',
    margin: 0,
    position: 'absolute',
    width: '100%',
    boxSizing: 'border-box',
    top: '90%',
  }),

  valueContainer: () => ({
    position: 'relative',
    boxSizing: 'border-box',
    overflow: 'hidden',
    padding: '1rem',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: 'white',
  }),
};

//replaces the react-select arrow to the provided one. 
const ArrowItem = () => (
  <div style={{ display: 'flex' }}>
    <S.Img src={ARROW_DOWN_SM} alt='Select a filter'></S.Img>
  </div>
)
const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <ArrowItem />
    </components.DropdownIndicator>
  )
}


const FilterSalons = () => {
  return (
    <div>
      <Select
        options={filterOptions}
        styles={customStyles}
        closeMenuOnSelect={true}
        defaultValue={filterOptions[0]}
        isSearchable={false}
        components={{ DropdownIndicator }}
        onChange={e => console.log('it works')}
      />
    </div>
  );
};

export default FilterSalons;
