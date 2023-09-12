import React from "react";
import heroimage from "./images/heroimage.png";
const HeroSection = () => {
  return (
    <div className="flex  justify-between mt-20 flex-wrap">
      <div>
        <div>
          <ul className="flex gap-3">
            <li>
              <div className=" relative ">
                <p className=" font-semibold text-base leading-normal text-[#B00000]">
                  Hosting
                </p>
                <span className=" absolute w-10 left-2  bottom-0 h-[1px] bg-[#B00000] border-solid rounded-xl"></span>
              </div>
            </li>
            <li>
              <div className="flex items-center relative ">
                <p className=" font-semibold text-base leading-normal text-[#D6D4D4E0]">
                  Domain
                </p>
                <span className=" absolute w-10 left-2  bottom-0 h-[1px] bg-[#E5E5E5] border-solid rounded-xl"></span>
              </div>
            </li>
            <li>
              <div className=" relative ">
                <p className=" font-semibold text-base leading-normal text-[#D6D4D4E0]">
                  SEO{" "}
                </p>
                <span className=" absolute w-10 left-1  bottom-0 h-[1px] bg-[#E5E5E5] border-solid rounded-xl"></span>
              </div>
            </li>
            <li>
              <div className=" relative ">
                <p className=" font-semibold text-base leading-normal text-[#D6D4D4E0]">
                  Email
                </p>
                <span className=" absolute w-10 left-2  bottom-0 h-[1px] bg-[#E5E5E5] border-solid rounded-xl"></span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-[64px] font-bold leading-[75px]">
            Premium Web <br /> Hosting for Your <br /> Website
          </h1>
          <p className=" mt-8 text-base font-normal leading-7   tracking-[0.8px] text-[#808080]">
            Blazing fast web hosting for individuals and <br /> businesses of
            all sizes backed by 24x7x365 Support.
          </p>
          <div className="flex gap-3 mt-9 ml-4">
            <button className=" text-sm font-normal p-2  w-40 shadow-[0px_0px_64px_0px rgba(176, 0, 0, 0.30)]  boxshad rounded-lg bg-[#B00000] leading-6 text-white  font-roboto">
              Create an Account
            </button>
            <button className=" text-sm font-normal p-2  w-40 shadow-[0px_0px_64px_0px rgba(176, 0, 0, 0.30)]  rounded-lg leading-6 border-black border-solid border-[1px]  font-roboto">
              Choose your plan
            </button>
          </div>
        </div>
      </div>
      <div className="py-6 px-10 relative">
        <img src={heroimage} />
        <div className="absolute right-5 top-[20%]">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M40 40H0L40 0V40Z" fill="#B00000" />
          </svg>
        </div>
        <div className="absolute right-5 bottom-[20%]">
          <svg
            width={72}
            height={72}
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M72 72H0L72 0V72Z" fill="#B00000" />
          </svg>
        </div>
        <div className="absolute left-4 bottom-[20%]">
          <svg
            width={40}
            height={40}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 40H40L0 0V40Z" fill="#B00000" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
