import React from 'react'
import styleScreenPlanesDeCompra from './ScreenPlanesDeCompra.module.css'

const ScreenPlanesDeCompra = () => {
  return (
    <div className={styleScreenPlanesDeCompra.generalDiv}>

      <div className={styleScreenPlanesDeCompra.title}>
        <h2>Título</h2>
      </div>

      <div className={styleScreenPlanesDeCompra.generalData}></div>

      <div className={styleScreenPlanesDeCompra.table}></div>
    </div>
  )
}

export default ScreenPlanesDeCompra