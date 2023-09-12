import React from "react";

const ResuableContentBox = ({ head, conent, buttonText,mwidth,style }) => {
  return (
    <div className={`absolute ${style}  py-3.5 px-4 w-[${mwidth}] m-auto reuseablebox text-white flex flex-col justify-start gap-2 shrink-0 items-start rounded-3xl  bg-gradient-[180deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.20) 100%] shadow-3xl`}>
      <h3>{head}</h3>
      <p className="text-sm font-thin leading-5 m-auto">{conent}</p>
      {buttonText && <button className="rounded-3xl bg-white text-[#70493E] py-2.5 px-5 w-[100%]">{buttonText}</button>}
    </div>
  );
};

export default ResuableContentBox;
