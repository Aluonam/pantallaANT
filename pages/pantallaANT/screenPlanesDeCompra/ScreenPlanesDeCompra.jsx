import React from 'react'
import styleScreenPlanesDeCompra from './ScreenPlanesDeCompra.module.css'
import Title from './components/title/Title'
import Filters from './components/filters/Filters'
import Table from './components/table/Table'

const ScreenPlanesDeCompra = ({titleValue}) => {
  return (
    <div className={styleScreenPlanesDeCompra.generalDiv}>
      
        <Title titleValue={titleValue}></Title>
      
        <Filters></Filters>
      
        <Table></Table>
      
    </div>
  )
}

export default ScreenPlanesDeCompra