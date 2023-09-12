import React from "react";

const Header = () => {
  const list = ["About", "Product", "Pricing", "Resources", "Jobs"];
  return (
    <div className="header rounded-t-[22px] flex  justify-between py-4 items-center h-16">
      <div className="pl-[46px] text-white">Your Logo</div>
      <div>
      <ul class="list-none flex gap-14">
        {list.map((item)=>{
           return <li className="text-sm text-white font-medium leading-5 not-italic font-sans">{item}</li>
        })}
</ul>
      </div>
      <div className="pr-[76px]">
        <button className="bg-[#fff] rounded-lg max-[126px] py-3 px-5 text-sm	font-medium leading-5  text-[#70493E]">Buy now</button>
      </div>
    </div>
  );
};

export default Header;
