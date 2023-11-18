import React from 'react'
import styleTable from './Table.module.css'
import Pagination from './tablecomponents/pagination/Pagination'
import TableData from './tablecomponents/tableData/TableData'

const Table = () => {
  return (
    <div className={styleTable.table}>
      <Pagination></Pagination>
      <TableData></TableData>
    </div>
  )
}

export default Table