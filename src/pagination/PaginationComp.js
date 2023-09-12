import React from 'react'
import classnames from "classnames"
import { usePagination } from './usePagination';
import './pagination.scss';
const PaginationComp = (props) => {
    const{ currentPage,
    onPageChage,
    pageSize,
    siblingCount=1,
    className,
    totalCount}=props

    const PaginationRage=usePagination({currentPage,totalCount,siblingCount,pageSize})
    if(currentPage ===0 || PaginationRage.length <2) {
        return null;
    }
    const onNext=()=>{
        onPageChage(currentPage+1)
    }
    const onPrev=()=>{
        onPageChage(currentPage-1)
    }
    let lastPage = PaginationRage[PaginationRage.length - 1];
    let DOTS="...   "
  return (
    <div>
        <ul 
              className={classnames('pagination-container', { [className]: className })}

        >
            <li
               className={classnames('pagination-item', {
                disabled: currentPage === 1
              })}

             onClick={onPrev}>
                Prev
                <div className="arrow left" />

            </li>
            {PaginationRage.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        return (
          <li
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChage(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}

            <li
               className={classnames('pagination-item', {
                disabled: currentPage === lastPage
              })}
             onClick={onNext}>
                Next
                <div className="arrow right" /> 
            </li>
        </ul>
    </div>
  )
}

export default PaginationComp