import React from 'react'
import styleTable from './Table.module.css'
import TableData from './tableData/TableData'

const Table = () => {
  return (
    <div className={styleTable.table}>
      <TableData></TableData>
    </div>
  )
}

export default Table