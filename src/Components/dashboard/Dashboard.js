import React from 'react'
import Sidebar from './Sidebar'
import DataTable from './DataTable'

export const Dashboard = () => {
  return (
    <div className='flex flex- mx-auto    w-full bg-[#F1F2F6]   border-solid rounded-[30px]  overflow-x-hidden   '>
        <Sidebar/>
        <DataTable/>
    </div>
  )
}
