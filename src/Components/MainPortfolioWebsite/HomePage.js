import React from "react";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";

const HomePage = () => {
  return (
    <div className="bg-[#0E0E10] min-h-[100vh] flex flex-col items-center  w-screen h-full bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navbar/>
      <HeroSection/>
    </div>
  );
};

export default HomePage;
