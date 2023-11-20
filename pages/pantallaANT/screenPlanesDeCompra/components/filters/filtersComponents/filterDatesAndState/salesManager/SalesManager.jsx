import React from 'react'
import styleSalesManager from './SalesManager.module.css'
import SelectSalesManagerANT from './SelectSalesManagerANT'
import styleFilters from '../../../Filters.module.css'


const SalesManager = () => {
  return (
    <div className={styleSalesManager.box4}>
        <span className={styleFilters.titleFilters}>Jefe de Ventas</span>
        <SelectSalesManagerANT></SelectSalesManagerANT>
        </div>
  )
}

export default SalesManager