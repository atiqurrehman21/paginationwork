import React from 'react'
import Landing from './Landing'
import LandingPageConent from './LandingPageConent'
import ResuableContentBox from './ResuableContentBox'

const FlightLandingPage = () => {
  return (
    
    <div className={` back`}>
    <Landing/>
   <LandingPageConent/>
     <div className=' w-96 '>
    <ResuableContentBox style={"right-[10%] bottom-[30%]"} mwidth={"14%"} head={"Plane"} conent={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."} 
    buttonText={"Buy now"}/>
     </div>
   <ResuableContentBox style={"left-[10%] bottom-[10%]"} mwidth={"25%"} head={"Broken "} conent={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."} 
     /> 
   </div>
  )
}

export default FlightLandingPage