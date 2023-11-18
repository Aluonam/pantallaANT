import React from 'react'
import styleFilters from './Filters.module.css'
import FilterEntityAndClientCode from './filtersComponents/filterEntityAndClientCode/FilterEntityAndClientCode'
import FilterDatesAndState from './filtersComponents/filterDatesAndState/FilterDatesAndState'
import FilterButtonClear from './filtersComponents/filterButtonsClear/FilterButtonClear'

const Filters = () => {
  return (
    <div className={styleFilters.filters}>
        <div className={styleFilters.filters_inputs}>
       <FilterEntityAndClientCode></FilterEntityAndClientCode>
       <FilterDatesAndState></FilterDatesAndState>
       <FilterButtonClear></FilterButtonClear>
        </div>
        <div className={styleFilters.filters_buttons}>sss</div>
    </div>
  )
}

export default Filters