import React from "react";

const PricingFilter = () => {
  return (
    <div className="flex  justify-center items-center flex-col gap-8 mt-28 flex-wrap">
      <h1 className="text-[40px] text-center  font-semibold leading-[60px]">
        Ready to get started with <br />
        Lemon Wares?
      </h1>
      <p className=" font-normal text-xl leading-6">
        Choose the package that suits you
      </p>
      <div className="flex gap-6 justify-center items-center">
        <p className="text-lg font-normal  leading-6">Month</p>
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="w-16 h-8 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-[29px] after:transition-all dark:border-gray-600 peer-checked:bg-red-500"></div>
        </label>
        <p className="text-lg font-normal  leading-6">Yearly</p>
        <span className="border-solid rounded-lg flex-shrink-0 bg-[#FFE87A]">
          <p className="text-[10px] p-1"> 20% discount</p>
        </span>
      </div>
      <div className="mt-4">
        <button className="border-solid text-3xl text-center  font-semibold leading-[60px] border-b-[4px] border-b-[#B00000] px-10  w-[28rem]">
          {" "}
          Basic
        </button>
        <button className="border-solid text-3xl text-center  font-semibold leading-[60px]  border-b-[4px] border-b-[#C4C4C4] px-10 w-[28rem]">
          Premium
        </button>
      </div>
    </div>
  );
};

export default PricingFilter;
