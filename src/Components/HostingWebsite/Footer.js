import React from "react";
import footerlogo from "./images/footerlogo.png"

const Footer = () => {
  return (
    <div className=" p-28 bg-[#B00000]">
      <div className="flex  gap-28 flex-col md:flex-row flex-wrap">
        <div>
         <img src={footerlogo}/>
          <p className=" text-base  font-normal leading-8 w-60 mt-5 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem
          </p>

        </div>
        <div className="flex gap-4 md:gap-28 sm:4 flex-col md:flex-row">
          <div className="text-white sm:gap-2  flex  flex-col gap-8">
            <h3 className="font-bold text-base">Service</h3>
            <p className="font-normal text-base">Domain</p>
            <p className="font-normal text-base">Shared Hosting</p>
            <p className="font-normal text-base">Cloud Hosting</p>
            <p className="font-normal text-base">Private Hosting</p>
          </div>
          <div className="text-white sm:gap-4   flex  flex-col gap-8">
            <h3 className="font-bold text-base">Service</h3>
            <p className="font-normal text-base">Domain</p>
            <p className="font-normal text-base">Shared Hosting</p>
            <p className="font-normal text-base">Cloud Hosting</p>
            <p className="font-normal text-base">Private Hosting</p>
          </div>
          <div className="text-white  sm:gap-2  flex  flex-col gap-8">
            <h3 className="font-bold text-base">Service</h3>
            <p className="font-normal text-base">Domain</p>
            <p className="font-normal text-base">Shared Hosting</p>
            <p className="font-normal text-base">Cloud Hosting</p>
            <p className="font-normal text-base">Private Hosting</p>
          </div>
          <div className="text-white sm:gap-2 flex  flex-col gap-8">
            <h3 className="font-bold text-base">Service</h3>
            <p className="font-normal text-base">Domain</p>
            <p className="font-normal text-base">Shared Hosting</p>
            <p className="font-normal text-base">Cloud Hosting</p>
            <p className="font-normal text-base">Private Hosting</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
