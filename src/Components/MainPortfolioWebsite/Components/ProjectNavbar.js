import React from "react";
import { Link } from "react-router-dom";
const ProjectNavbar = () => {
  return (
    <div className="py-5 px-6 flex flex-row  justify-between items-center">
      <Link className=" text-white cursor-pointer" to={"/"} >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-6 h-6 "
        >
          <line x1="19" x2="5" y1="12" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </Link>
      <nav className="">
        <ul className="flex items-center justify-center gap-4">
          <Link
            className="text-md duration-500 text-zinc-400 hover:text-zinc-300 hover:text-lg"
            to="/projects"
          >
            Free Projects
          </Link>
          <Link
            className="text-md duration-500 text-zinc-400 hover:text-zinc-300 hover:text-lg"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="text-md duration-500 text-zinc-400 hover:text-zinc-300 hover:text-lg"
            to="/discord"
          >
            Discord
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default ProjectNavbar;
