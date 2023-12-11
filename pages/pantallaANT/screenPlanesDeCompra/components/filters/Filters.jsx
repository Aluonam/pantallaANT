import React, {useState} from 'react'
import styleFilters from './Filters.module.css'
import FilterEntityAndClientCode from './filtersComponents/filterEntityAndClientCode/FilterEntityAndClientCode'
import FilterDatesAndState from './filtersComponents/filterDatesAndState/FilterDatesAndState'
import FilterButtonClear from './filtersComponents/filterButtonsClear/FilterButtonClear'
import FilterButtonsNewAndDownload from '../buttonsNewAndDownload/FilterButtonsNewAndDownload'

const Filters = () => {

  const [showMore, setShowMore] = useState(true)

  const handleShow = ()=>{
    setShowMore(!showMore)
  }

  return (
    <div className={styleFilters.filters}>
        <div className={styleFilters.filters_inputs}>
          <FilterEntityAndClientCode></FilterEntityAndClientCode>
          {showMore && <FilterDatesAndState></FilterDatesAndState>} 
          <FilterButtonClear showMore={showMore} onClick={handleShow}></FilterButtonClear>
        </div>
        <div className={styleFilters.filters_buttons}>
          <FilterButtonsNewAndDownload></FilterButtonsNewAndDownload>
        </div>
    </div>
  )
}

export default Filters