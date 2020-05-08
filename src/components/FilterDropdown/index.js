import React, { useState } from 'react'
import Select from 'react-select'

import * as S from '../FilterDropdown/styles'

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
]

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid #eeeeee',
    borderRadius: 0,
    padding: 16,
    backgroundColor: state.isSelected ? '#eeeeee' : 'white',
    color: '#202020',
    '&:hover': { backgroundColor: '#eeeeee', cursor: 'pointer' }
  }),

  control: () => ({
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

  menu: () => ({
    borderRadius: 0,
    fontSize: '15px',
    margin: 0,
    position: 'absolute',
    top: '100%',
    width: '100%',
    boxSizing: 'border-box',
  }),

  valueContainer: () => ({
    position: 'relative',
    boxSizing: 'border-box',
    overflow: 'hidden',
    padding: '15px',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
  }),
}


const FilterSalons = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = e => {
    setIsOpen(!isOpen)
  }

  return (
    <div style={{ position: 'relative' }}>
      <Select
        options={filterOptions}
        styles={customStyles}
        closeMenuOnSelect
        defaultValue={filterOptions[0]}
        isSearchable={false}
      >

      </Select>
    </div>
  )
}

export default FilterSalons
