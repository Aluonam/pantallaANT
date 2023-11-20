import React from 'react'
import styleDatesInterval from './DatesInterval.module.css'
import DateIntervalRangeANT from './DateIntervalRangeANT'
import styleFilters from '../../../Filters.module.css'


const DatesInterval = () => {
  return (
    <div className={styleDatesInterval.box3}> 
      <span className={styleFilters.titleFilters}>PC vigentes en este intervalo</span>
      <DateIntervalRangeANT></DateIntervalRangeANT>
      </div>
  )
}

export default DatesInterval