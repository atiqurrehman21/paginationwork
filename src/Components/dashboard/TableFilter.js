import React from "react";

const TableFilter = () => {
  return (
    <div className="px-2 py-7 bg-white p-4  ">
      <div className="flex justify-between items-center ml-4  flex-wrap sm:gap-3">
        <div>
          <h1 className="  text-lg font-medium leading-6 font-sans text-[#404D61]">
            Employee
          </h1>
          <p className="  text-sm font-normal leading-5 font-sans text-[#404D61]">
            18 results found
          </p>
        </div>
        <div className="flex  items-center gap-4 mr-4  flex-wrap sm:gap-3">
          <div className="flex  justify-center items-center py-[10px] px-[10px]  border-solid   rounded-lg border-[1px] border-[#E0E0E0] w-12 h-10">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
                stroke="#757D8A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex  justify-center items-center py-[10px] px-[20px]  border-solid   rounded-lg border-[1px] border-[#E0E0E0] h-10">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 5H21"
                stroke="#757D8A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 9H18"
                stroke="#757D8A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 13H15"
                stroke="#757D8A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 17L6 20L9 17"
                stroke="#757D8A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 18V4"
                stroke="#757D8A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className=" text-xs text-[#757D8A] font-normal">
              Sort: Chronological
            </span>
          </div>
          <div className="flex  justify-center items-center py-[10px] px-[20px]  border-solid gap-2   rounded-lg border-[1px] border-[#E0E0E0] h-10">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="#757D8A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className=" text-xs text-[#757D8A] font-normal">
              Sort: Chronological
            </span>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#757D8A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableFilter;
