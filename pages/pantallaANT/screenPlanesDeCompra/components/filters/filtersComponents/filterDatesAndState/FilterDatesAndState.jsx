import React from 'react'
import styleFilterDatesAndState from './FilterDatesAndState.module.css'
import DatesInterval from './datesInterval/DatesInterval'
import SalesManager from './salesManager/SalesManager'
import SalesDelegate from './salesDelegate/SalesDelegate'
import SalesState from './salesState/SalesState'

const FilterDatesAndState = () => {
  return (
    <div className={styleFilterDatesAndState.container2}>
      <DatesInterval></DatesInterval>
      <SalesManager></SalesManager>
      <SalesDelegate></SalesDelegate>
      <SalesState></SalesState>
      </div>
  )
}

export default FilterDatesAndState