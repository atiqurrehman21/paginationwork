import React from "react";
import { tablelist } from "./Constraints";
export default function ResuseAbleTable() {
  const tableHead = [
    { id: 1, name: "name" },
    { id: 2, name: "email" },
    { id: 3, name: "status" },
    { id: 4, name: "role" },
    { id: 5, name: "" },
  ];
  const HandleCheckStatus=(status)=>{
    switch(status){
        case "free":
            return "text-[#0064FF]";
        case "busy":
            return "text-[#F63F3F]";
        case "working":
            return "text-[#404D61]";
        case "on vacation":
            return "text-[#F9A348]";
        default:
            return null;
    }
  }
  return (
            <table className="w-full text-left text-sm font-light">
              <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  {tableHead
                  .map((item) => (
                    <th key={item.id} scope="col" className="px-6 py-4 ">
                      <div className="flex  items-center gap-3 capitalize">
                        {item.name}
                       {item.name? <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M6 8.5L1 3.5L11 3.5L6 8.5Z" fill="#B1B1B1" />
                        </svg>
                        :""}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tablelist
                .slice(0,8)
                .map((item) => (
                  <tr className={`border-b ${item.id%2===0?"bg-white": "bg-neutral-100"} dark:border-neutral-500 dark:bg-neutral-600`}>
                    <td className="whitespace-nowrap px-6 py-4 font-normal text-base text-[#404D61]">
                        <div className="flex items-center gap-1">
                           {item.image}
                            {item.name}
                        </div>
                     
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-normal text-base text-[#404D61]">
                      {item.email}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-normal text-base text-[#404D61]">{item.role}</td>
                    <td className={`whitespace-nowrap px-6 py-4 font-normal text-base ${HandleCheckStatus(item.status.toLowerCase())} `}>
                      {item.status}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-normal text-base text-[#404D61]">
                      <div className="flex gap-3 items-center justify-start ">
                        <button>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_33_266)">
                              <path
                                d="M12 1.33334L14.6667 4"
                                stroke="#757D8A"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M4.99992 13.6667L12.6666 6L9.99992 3.33334L2.33325 11L1.33325 14.6667L4.99992 13.6667Z"
                                stroke="#757D8A"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_33_266">
                                <rect width={16} height={16} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                        <button>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2 4H3.33333H14"
                              stroke="#757D8A"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.33325 4V2.66667C5.33325 2.31305 5.47373 1.97391 5.72378 1.72386C5.97383 1.47381 6.31296 1.33334 6.66659 1.33334H9.33325C9.68687 1.33334 10.026 1.47381 10.2761 1.72386C10.5261 1.97391 10.6666 2.31305 10.6666 2.66667V4M12.6666 4V13.3333C12.6666 13.687 12.5261 14.0261 12.2761 14.2761C12.026 14.5262 11.6869 14.6667 11.3333 14.6667H4.66659C4.31296 14.6667 3.97382 14.5262 3.72378 14.2761C3.47373 14.0261 3.33325 13.687 3.33325 13.3333V4H12.6666Z"
                              stroke="#757D8A"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.66675 7.33334V11.3333"
                              stroke="#757D8A"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.33325 7.33334V11.3333"
                              stroke="#757D8A"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
  );
}
