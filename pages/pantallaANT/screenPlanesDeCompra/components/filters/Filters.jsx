import React from 'react'
import styleFilters from './Filters.module.css'

const Filters = () => {
  return (
    <div className={styleFilters.filters}>
        <div className={styleFilters.filters_inputs}></div>
        <div className={styleFilters.filters_buttons}></div>
    </div>
  )
}

export default Filters