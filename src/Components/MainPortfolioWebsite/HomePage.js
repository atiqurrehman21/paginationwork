import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

const HomePage = () => {
  return (
    <div className="bg-[#0E0E10] flex flex-col items-center justify-center w-screen h-full bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navbar/>
      <HeroSection/>
    </div>
  );
};

export default HomePage;
