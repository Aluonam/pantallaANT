import React from 'react'
import styleClientCodeBox from './ClientCodeBox.module.css'
import InputClientCodeANT from './InputClientCodeANT'

const ClientCodeBox = () => {
  return (
    <div className={styleClientCodeBox.box2}>
      <span className={styleClientCodeBox.titleClientCode}>Código Cliente</span>
      <InputClientCodeANT></InputClientCodeANT>
    </div>
  )
}

export default ClientCodeBox