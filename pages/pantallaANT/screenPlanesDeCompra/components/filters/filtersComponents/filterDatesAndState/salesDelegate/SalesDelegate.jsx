import React from 'react'
import styleSalesDelegate from './SalesDelegate.module.css'
import SelectSalesDelegateANT from './SelectSalesDelegateANT'
import styleFilters from '../../../Filters.module.css'

const SalesDelegate = () => {
  return (
    <div className={styleSalesDelegate.box5}>
        <span className={styleFilters.titleFilters}>Delegado Comercial</span>
        <SelectSalesDelegateANT></SelectSalesDelegateANT>
        </div>
  )
}

export default SalesDelegate