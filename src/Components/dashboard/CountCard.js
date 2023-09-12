import React from "react";

const CountCard = () => {
  return (
    <div className="px-4 py-2 bg-white flex  gap-8  flex-wrap sm:gap-3">
     {[1,2,3,4].map((item,index)=>(
      <div className={`flex  flex-col gap-2 p-8  ml-2 bg-[#F8F8F8] hover:bg-[#5B6AD0] group hover:text-white max-w-[226PX] w-full  h-full max-h-[130px]  rounded-xl`}>
        <div className="flex  justify-start items-center gap-2">
          <p>Total Budget</p>
          <div className=" cursor-pointer">
          {index!==3?
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 13.25L1.5 5.75L16.5 5.75L9 13.25Z" fill="#F63F3F" />
          </svg>
          :
          <svg width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 5.75L16.5 13.25L1.5 13.25L9 5.75Z" fill="#44C5E2" />
</svg>}

          </div>
        </div>
        <h1 className="  text-lg group-hover:text-white font-bold leading-6 font-sans text-[#404D61]">
          $85,125.00
        </h1>
      </div>
      ))}
    </div>
  );
};

export default CountCard;
