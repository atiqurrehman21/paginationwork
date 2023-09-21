import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Components/MainPortfolioWebsite/HomePage';
import Discord from './Components/MainPortfolioWebsite/Discord';
import Contact from './Components/MainPortfolioWebsite/Contact';
import Porojects from './Components/MainPortfolioWebsite/Porojects';
import NewLetterPage from './Components/MainPortfolioWebsite/NewLetterPage';
import FormDesign from "./Components/FormDesign/FormDesgin"
import QuizApp from "./Components/QuizApp/QuizApp"
import Ecommerce from "./Components/EcommerceProject/Ecommerce"
import FlightLandingPage from './Components/LandPageWebsite/FlightLandingPage';
import HostingWebsite from "./Components/HostingWebsite/HostingLandingPage"
import {Dashboard} from "./Components/dashboard/Dashboard"
import DragDrop from './Components/DragDrop/DragDrop';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/discord",
    element: <Discord />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/projects",
    element: <Porojects />,
    
  },
  {
    path: "/newsletter",
    element: <NewLetterPage />,
  },
  {
    path:"/projects/ecommerce",
    element:<Ecommerce/>

  },
  {
    path:"/projects/hostingwebesite",
    element:<HostingWebsite/>
  },
  {
    path:"/projects/dashboard",
    element:<Dashboard/>
  },
  {
    path:"/projects/quizapp",
    element:<QuizApp/>
  },
  {
    path:"/projects/flightlandingpage",
    element:<FlightLandingPage/>
  },
  {
    path:"/projects/formdesign",
    element:<FormDesign/>
  },
  {
    path:"/dragDrop",
    element:<DragDrop/>
  }
  // 

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
