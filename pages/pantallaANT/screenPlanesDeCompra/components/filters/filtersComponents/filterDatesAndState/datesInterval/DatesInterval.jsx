import React from 'react'
import styleDatesInterval from './DatesInterval.module.css'
import DateIntervalRangeANT from './DateIntervalRangeANT'

const DatesInterval = () => {
  return (
    <div className={styleDatesInterval.box3}> 
      <span className={styleDatesInterval.titleDatesInterval}>PC vigentes en este intervalo</span>
      <DateIntervalRangeANT></DateIntervalRangeANT>
      </div>
  )
}

export default DatesInterval