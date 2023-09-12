import React from "react";

const TableHead = () => {
  return (
    <div className="px-2 py-7 bg-white p-4 w-full border-b-[#F1F2F6] border-b-[1px] border-solid ">
      <div className="flex justify-between items-center ml-4 flex-wrap gap-3">
        <div>
        <h1 className='  text-lg font-medium leading-6 font-sans text-[#757D8A]'>Data Table</h1>
        </div>
        <div className="flex  items-center gap-4 mr-4 flex-wrap">
          <form className=" md:px-4 sm:px-0 ">
            <div className="relative rounded-[10px] bg-[#E2E6FF] p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {/* Cross */}
              <div className="absolute right-0 top-3 pr-3">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#757D8A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 9L9 15"
                  stroke="#757D8A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 9L15 15"
                  stroke="#757D8A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="w-full py-3 pl-12  h-10 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-[#5B6AD0] border-[#5B6AD0]"
              />
            </div>
          </form>
          <button className="bg-[#5B6AD0] py-[10px]   px-[20px] border-solid  text-white text-base font-normal font-sans rounded-xl border-[#5B6AD0]">
            Add Employee
          </button>
          <div className="flex  justify-center items-center p-3 border-solid   rounded-lg border-[1px] border-[#E0E0E0] w-12 h-11">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 2L22 6"
                stroke="#757D8A"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.5 20.5L19 9L15 5L3.5 16.5L2 22L7.5 20.5Z"
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

export default TableHead;
