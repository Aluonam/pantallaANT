import React from 'react'
import styleFilterEntityAndClientCode from './FilterEntityAndClientcode.module.css'
import EntityBox from './EntityBox/EntityBox'
import ClientCodeBox from './ClientCodeBox/ClientCodeBox'

const FilterEntityAndClientCode = () => {
  return (
    <div className={styleFilterEntityAndClientCode.container1}>
      <EntityBox></EntityBox>
      <ClientCodeBox></ClientCodeBox>
    </div>
  )
}

export default FilterEntityAndClientCode