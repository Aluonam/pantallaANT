import React from 'react'
import ButtonFilterANT from './ButtonFilterANT'
import ButtonClearANT from './ButtonClearANT'
import style from './ButtonsFilterAndClear.module.css'

const ButtonsFilterAndClear = () => {
  return (
    <div className={style.filterAndClear}>
        <ButtonFilterANT></ButtonFilterANT>
        <ButtonClearANT></ButtonClearANT>
    </div>
  )
}

export default ButtonsFilterAndClear