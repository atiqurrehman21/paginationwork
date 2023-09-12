import React,{useState,useMemo} from 'react'
import data from  "../mockdata.json"
import PaginationComp from './PaginationComp';

import './pagination.scss';

let PageSize=10;

const Pagination = () => {
    const [currentPage,setCurrentPage]=useState(1)
    const curreentTableData=useMemo(()=>{
        const firstPageIndex=(currentPage-1)*PageSize;
        const lastPageIndex=firstPageIndex+PageSize;
        return data.slice(firstPageIndex,lastPageIndex)
    },[currentPage])

  return (
    <div>
          <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {curreentTableData.map(item => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <PaginationComp
      className={"pagination-bar"}
      currentPage={currentPage}
      pageSize={PageSize}
      totalCount={data.length}
      onPageChage={page=>setCurrentPage(page)}/>
    </div>
  )
}

export default Pagination