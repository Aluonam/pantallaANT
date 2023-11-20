import React from 'react'
import styleClientCodeBox from './ClientCodeBox.module.css'
import InputClientCodeANT from './InputClientCodeANT'
import styleFilters from '../../../Filters.module.css'


const ClientCodeBox = () => {
  return (
    <div className={styleClientCodeBox.box2}>
      <span className={styleFilters.titleFilters}>Código Cliente</span>
      <InputClientCodeANT></InputClientCodeANT>
    </div>
  )
}

export default ClientCodeBox