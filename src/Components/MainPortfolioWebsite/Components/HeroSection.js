import React from "react";
import profile from "../images/Frontend.png";
import NewLetter from "./NewsLetter";
const HeroSection = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className=" flex justify-center items-center flex-col gap-6">
        <div className="relative  h-20  w-24 sm:h-24 sm:w-24 md:w-28 md:h-28 mb-6 animate-title">
          <img src={profile} alt="profile-image" />
        </div>
        <h1 className="z-10  text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text ">
          Code With Atiq
        </h1>
        <div></div>
        <NewLetter/>
        <a className="animate-fade-in bg-[#F9FAFB] flex   flex-row  justify-start items-center py-6 px-3 rounded-sm w-full" href="https://github.com/atiqurrehman123" target="_blank">
        <div className="relative w-14 h-8 sm:h-24 items-center sm:w-24 md:w-28 md:h-12">
          <img src={profile} alt="profile-image"  className=" h-16"/>
        </div>
        <h1 className="font-bold  text-[#4E4E4E]  text-xl">CodeWithAtiq</h1>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
