import React, { useState } from 'react'
import styleFilterButtonClear from './FilterButtonClear.module.css'
import ButtonShowMoreANT from './ButtonShowMoreANT'
import ButtonFilterANT from './ButtonFilterANT'
import ButtonClearANT from './ButtonClearANT'

const FilterButtonClear = ({showMore, onClick}) => {
  
  return (
    <div className={styleFilterButtonClear.container3}>
        <ButtonShowMoreANT showMore={showMore} onClick={onClick}></ButtonShowMoreANT>
        <ButtonFilterANT></ButtonFilterANT>
        <ButtonClearANT></ButtonClearANT>
      </div>
  )
}

export default FilterButtonClear