import React from 'react'
import NewLetter from './Components/NewsLetter'
import ProjectNavbar from './Components/ProjectNavbar'

const NewLetterPage = () => {
  return (
    <div className="bg-[#0E0E10] min-h-[100vh]  w-screen h-full bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <ProjectNavbar/>
        <div className='flex  justify-center items-center pt-16'>
        <div className='flex w-[35rem] '>
        <NewLetter animation={true}/>
        </div>
        </div>
        </div>
  )
}

export default NewLetterPage