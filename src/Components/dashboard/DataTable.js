import React from 'react'
import TableHead from './TableHead'
import TableFilter from './TableFilter'
import CountCard from './CountCard'
import TableComponent from './TableComponent'

function DataTable() {
  return (
    <div className='w-full bg-white '>
        <TableHead/>
        <TableFilter/>
        <CountCard/>
        <TableComponent/>

    </div>
  )
}

export default DataTable