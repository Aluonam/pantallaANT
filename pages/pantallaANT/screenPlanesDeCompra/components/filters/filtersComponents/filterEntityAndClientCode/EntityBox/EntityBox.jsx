import React from 'react'
import styleEntityBox from './EntityBox.module.css'
import SelectEntityANT from './SelectEntityANT'
import styleFilters from '../../../Filters.module.css'


const EntityBox = () => {
  return (
    <div className={styleEntityBox.box1}>
      <div className={styleFilters.titleFilters}>Entidad
        <span className={styleEntityBox.subtitleEntity}> (Código, Nombre, Código Postal, Población, Provincia, Dirección) 
        </span>
      </div>
      
      <SelectEntityANT></SelectEntityANT>

    </div>
  )
}

export default EntityBox