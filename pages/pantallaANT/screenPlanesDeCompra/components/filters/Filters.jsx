import React from 'react'
import styleFilters from './Filters.module.css'
import FilterEntityAndClientCode from './filtersComponents/filterEntityAndClientCode/FilterEntityAndClientCode'
import FilterDatesAndState from './filtersComponents/filterDatesAndState/FilterDatesAndState'
import FilterButtonClear from './filtersComponents/filterButtonsClear/FilterButtonClear'
import FilterButtonsNewAndDownload from './filtersComponents/filterButtonsNewAndDownload/FilterButtonsNewAndDownload'

const Filters = () => {
  return (
    <div className={styleFilters.filters}>
        <div className={styleFilters.filters_inputs}>
          <FilterEntityAndClientCode></FilterEntityAndClientCode>
          <FilterDatesAndState></FilterDatesAndState>
          <FilterButtonClear></FilterButtonClear>
        </div>
        <div className={styleFilters.filters_buttons}>
          <FilterButtonsNewAndDownload></FilterButtonsNewAndDownload>
        </div>
    </div>
  )
}

export default Filters