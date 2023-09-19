import './App.css';
import Card from './Components/CardDesgin/Card';
import Modal from './Components/Collapse';
import Ecommerce from './Components/EcommerceProject/Ecommerce';
import FormDesgin from './Components/FormDesgin';
import HostingLandingPage from './Components/HostingWebsite/HostingLandingPage';
import LandingPageConent from './Components/LandingPageConent';
import Contact from './Components/MainPortfolioWebsite/Contact';
import Discord from './Components/MainPortfolioWebsite/Discord';
import HomePage from './Components/MainPortfolioWebsite/HomePage';
import Porojects from './Components/MainPortfolioWebsite/Porojects';
import QuizApp from './Components/QuizApp/QuizApp';
import ResuableContentBox from './Components/ResuableContentBox';
import { Dashboard } from './Components/dashboard/Dashboard';
// import Pagination from './pagination/Pagination';
import Form from './Form';
import Landing from './Landing';
import {  Link } from "react-router-dom";

function App() {
  
  return (
    //  <div className={` back`}>
    //  {/* <Pagination/> */}
    //  {/* <Form/> */}
    //  {/* <Landing/> */}
    //  {/* <LandingPageConent/> */}
    //  {/* <div className=' '> */}
    //  {/* <ResuableContentBox style={"right-[10%] bottom-[30%]"} mwidth={"14%"} head={"Plane"} conent={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."} 
    //  buttonText={"Buy now"}/> */}
    //  {/* </div> */}
    //  {/* <ResuableContentBox style={"left-[10%] bottom-[10%]"} mwidth={"25%"} head={"Broken "} conent={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."} 
    //  /> */}
   // {/* </div> */}
    <div>
      {/* <FormDesgin/> */}
      {/* <Dashboard/> */}
      {/* <Modal/> */}
      {/* <HostingLandingPage/> */}
      {/* <Ecommerce/> */}
      {/* <Card/> */}
      {/* Quiz app */}
      {/* <QuizApp/> */}
      {/* <HomePage/> */}
      {/* <Porojects/> */}
      {/* <Contact/> */}
      <Discord/>

    </div>

  );
}

export default App;
