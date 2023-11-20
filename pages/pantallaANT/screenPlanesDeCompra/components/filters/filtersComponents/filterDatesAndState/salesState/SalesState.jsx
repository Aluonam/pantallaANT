import React from 'react'
import styleSalesState from './SalesState.module.css'
import styleFilters from '../../../Filters.module.css'
import SelectSalesStateANT from './SelectSalesStateANT'

const SalesState = () => {
  return (
    <div className={styleSalesState.box6}>
        <span className={styleFilters.titleFilters}>Estado</span>
        <SelectSalesStateANT></SelectSalesStateANT>
        </div>
  )
}

export default SalesState