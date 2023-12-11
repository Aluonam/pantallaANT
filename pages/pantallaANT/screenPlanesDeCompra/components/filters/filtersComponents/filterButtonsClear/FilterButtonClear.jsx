import React from 'react'
import styleFilterButtonClear from './FilterButtonClear.module.css'
import ButtonShowMoreANT from './buttonShowMore/ButtonShowMoreANT'
import ButtonsFilterAndClear from './buttonsFilterAndClear/ButtonsFilterAndClear'

const FilterButtonClear = ({showMore, onClick}) => {
  
  return (
    <div className={styleFilterButtonClear.container3}>
        <ButtonShowMoreANT showMore={showMore} onClick={onClick}></ButtonShowMoreANT>
        <ButtonsFilterAndClear></ButtonsFilterAndClear>
      </div>
  )
}

export default FilterButtonClear