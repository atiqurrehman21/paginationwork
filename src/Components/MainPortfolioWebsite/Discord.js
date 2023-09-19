import React from "react";
import { Link } from "react-router-dom";
import ProjectNavbar from "./Components/ProjectNavbar";
import NewLetter from "./Components/NewsLetter";
import DiscordCard from "./Components/DiscordCard";
const Discord = () => {
  return (
    <div className="bg-[#0E0E10] min-h-[100vh]  w-screen h-full bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <ProjectNavbar />
      <div className=" flex flex-col flex-wrap text-white  px-12 pt-16">
        <h1 className=" font-bold text-4xl"> Free Tutorials</h1>
        <p className="mt-4 text-zinc-400">
          Learn full stack web development with free tutorials from
          CodeWithAntonio
        </p>
        <div className="flex flex-row flex-wrap mb-6 ">
          <DiscordCard />
          <NewLetter animation={true} />
        </div>
      </div>
    </div>
  );
};

export default Discord;
