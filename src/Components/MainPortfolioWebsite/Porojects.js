import React from "react";
import { Link } from "react-router-dom";
import ProjectNavbar from "./Components/ProjectNavbar";
const Porojects = () => {
  const projectlist=[
    {
      title:"ECommerce Website",
      href:"/projects/ecommerce",

    },
    {
      title:"Hosting Website",
      href:"/projects/hostingwebesite",
    },
    {
      title:"Dashboard Website",
      href:"/projects/dashboard",
    },
    {
      title:"Quiz App ",
      href:"/projects/quizapp",
    },
    {
      title:"Flight Landing Page ",
      href:"/projects/flightlandingpage",
    },
    {
      title:"Form Design ",
      href:"/projects/formdesign",
    },
    {
      href:"/dragDrop",
      title:"Drag Drop"
    }
  ]
  return (
    <div className="bg-[#0E0E10] min-h-[100vh]  w-screen h-full bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <ProjectNavbar/>
      <div className=" flex flex-col text-white  px-12 pt-16">
        <h1 className=" font-bold text-4xl"> Free Tutorials</h1>
        <p className="mt-4 text-zinc-400">
          Learn full stack web development with free tutorials from
          CodeWithAntonio
        </p>
        <div class="w-full h-px bg-zinc-800 mt-12 mb-12"></div>

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3 ">
         {projectlist.map((it,index)=>(
          <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
            <div className="pointer-events-none">
              <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
              <div
                className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
                style={{"-webkit-mask-image": "radial-gradient(240px at 588px 31px, white, transparent"}}
              ></div>
              <div
                className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
                style={{"-webkit-mask-image": "radial-gradient(240px at 588px 31px, white, transparent)"}}
              ></div>
            </div>
            <Link to={it.href}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    <time datetime="2023-09-18T00:00:00.000Z">
                      Sep 18, 2023
                    </time>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
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
                      className="w-4 h-4"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>{" "}
                   {Math.round(Math.random()*100)} K
                  </span>
                </div>
                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {it.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {/* Build an LMS AI Companion with Next.js 13, React, Tailwind,
                  Prisma, Stripe, Mux */}
                </p>
                {/* <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">→</span>
                  </p>
                </div> */}
              </article>
            </Link>
          </div>
          ))}
          
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Porojects;
