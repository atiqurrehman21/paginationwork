import React, { useState } from "react";

const FormDesgin = () => {
  const [inputValues,setInputValues]=useState({username:"",password:"",firstName:"",checked:false,toggleValue:false,dropdownValue:""})
  const [errors, setErrors] = useState({username: "",password: "",firstName: "",});
  const items = ["Option 1", "Option 2", "Option 3"];

  const [isOpen, setIsOpen] = useState(false);
  const [selected,setIsSelected]=useState("Select Dropdown Value");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const HandleChange = (event,label) => {
    let temp={...inputValues};
    if(label==="dropdownValue"){
      temp[label] =event
    } else{
      HandleError(event.target.value,label)

    temp[label]=event.target.value;
    }

    setInputValues(temp)
  }
  const HandleError=(value,label)=>{
    const newerrors={...errors}
    switch(label){
      case "username":
        newerrors.username=value.length<4 ?"Username must be at least 4 characters":"";
        break;
      case "password":
        newerrors.password=value.length <4 || value.length > 12 ? "Password must be at least 12 characters":"";
        break;
      case "firstName":
        newerrors.firstName=value.length <4 ? "First Name must be at least 4 characters":"";
        break;
      default:
        break;
    }
    setErrors(newerrors)
  }
  const HandleChecked = (event,label) => {
    let temp={...inputValues};
    temp[label]=event.target.checked;
    setInputValues(temp)
  }

  const HandleSubmit=()=>{
    if(Object.values(errors).some((error)=>error!=="")){
      alert("validation failed")
    }
  }

  return (
    <div className="max-h-[1200px] w-full p-4 bg-white flex-col flex justify-center items-center gap-8">
      <h3>Registration Form</h3>
      <div className="flex flex-col justify-start gap-2 items-stretch max-w-[400px] w-full relative">
        <label
          className="text-[#666]  text-xs font-semibold leading-[18px]"
          form="username"
        >
          Username
        </label>
        {/*              active:border-red-400
         */}
         {errors.username?
        <div className="absolute  right-[1rem]  top-[2.9rem]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z"
              fill="#EB5757"
            />
          </svg>
        </div>
        :""}
        <input
          placeholder="Enter username"
          type="text"
          value={inputValues.username}
          onChange={(e)=>{HandleChange(e,"username")}}
          className={`border-[1px] bg-white p-4  placeholder:text-[#CCC] text-[#666]  text-base  not-italic font-normal   rounded-lg border-[#CCC]  active:border-[#666]   
          ${errors.username?"border-red-400":""}`}
        />
      </div>
      <div className="flex flex-col justify-start gap-2 items-stretch max-w-[400px] w-full relative">
        <label
          className="text-[#666]  text-xs font-semibold leading-[18px]"
          form="password"
        >
          Password
        </label>
        {errors.password?
        <div className="absolute  right-[1rem]  top-[2.9rem]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z"
              fill="#EB5757"
            />
          </svg>
        </div>
        :""}
        <input
          placeholder="Enter password"
          type="text"
          value={inputValues.password}
          onChange={(e)=>{HandleChange(e,"password")}}
          className={`border-[1px] bg-white p-4  placeholder:text-[#CCC] text-[#666]  text-base  not-italic font-normal   rounded-lg border-[#CCC]  active:border-[#666]   
          ${errors.password?"border-red-400":""} `}
        />
         {errors.password?
        <p className="text-red-500 text-xs font-normal leading-[18px]">
          Your password is between 4 and 12 characters
        </p>
:""}
      </div>
      <div className="flex flex-col justify-start gap-2 items-stretch max-w-[400px] w-full relative">
        <label
          className="text-[#666]  text-xs font-semibold leading-[18px]"
          form="username"
        >
           Name
        </label>
        {errors.firstName?
        <div className="absolute  right-[1rem]  top-[2.9rem]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z"
              fill="#EB5757"
            />
          </svg>
        </div>
        :""}
        <input
          placeholder="Enter username"
          type="text"
          value={inputValues.firstName}
          onChange={(e)=>{HandleChange(e,"firstName")}}
          className={`border-[1px] bg-white p-4  placeholder:text-[#CCC] text-[#666]  text-base  not-italic font-normal   rounded-lg border-[#CCC]  active:border-[#666]   
          ${errors.firstName?"border-red-400":""}  `}
        />
       {errors.firstName?<p className="text-red-500  text-xs font-normal leading-[18px]">
         {errors.firstName}
        </p>
        :""}
      </div>
      <div className="flex flex-row justify-start gap-4 items-center max-w-[400px] w-full ">
        <input
          type="checkbox"
          checked={inputValues.checked}
          onChange={(e)=>{HandleChecked(e,"checked")}}
    
          class=" w-5  h-5 border-[1px] border-solid bg-white  checked:bg-[#7A5CFA] appearance-none focus:border-[#666] outline-none cursor-pointer rounded-[50%]"
        />
        <label
          className="text-[#666]  text-xs font-semibold leading-[18px]"
          form="username"
        >
          Remember me
        </label>
      </div>
      <div className="flex flex-row justify-start gap-4 items-center max-w-[400px] w-full  relative ">
        <label form="username">
          <input type="checkbox" class="sr-only peer"
            checked={inputValues.toggleValue}
          onChange={(e)=>{HandleChecked(e,"toggleValue")}}


                    />
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-[#7A5CFA] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#7A5CFA]"></div>
        </label>
        <label className="text-[#666]  text-xs font-semibold leading-[18px]">
          off
        </label>
      </div>
      <div className="flex flex-col justify-start gap-0 items-start max-w-[400px] w-full  relative ">
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Dropdown Title
        </label>
        <button className={`p-4   ${isOpen?"rounded-t-[8px] transition duration-700 ease-in-out ":"rounded-[8px]  "}  max-w-[400px] w-full border-solid  border-2 border-[#7A5CFA] `} onClick={toggleDropdown}>{selected}</button>

        {isOpen && (
          <div className=" cursor-pointer  mt-[84px] opacity-100 max-w-[400px] w-full 	absolute transition-opacity duration-300 delay-300 ease-in-out ">
            <ul className="bg-[aliceblue] transition duration-700 ease-in-out">
              {items.map((item, index) => (
                <li key={index} className={`p-4 max-h-14 h-full  ease-in-out delay-300 ${index!==items.length-1?"":"rounded-b-[8px]"} border-b-[1px] border-l-[1px] border-r-[1px] border-solid hover:bg-[#7A5CFA]   border-[#CCC] `}
               onClick={()=>{setIsSelected(item);toggleDropdown();HandleChange(item,"dropdownValue")}} >{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-2 items-start max-w-[400px] w-full   ">
       <button className="p-4 text-[#7A5CFA]  md:max-w-[140px] w-full  h-full  font-normal leading-6 not-italic text-center  text-base border-[1px] border-solid rounded-lg border-[#7A5CFA] ">Cancel</button>
       <button className="p-4 text-white md:max-w-[140px] w-full  h-full flex justify-center items-center font-normal leading-6 not-italic text-center  text-base border-[1px] border-solid rounded-lg bg-[#7A5CFA] " onClick={HandleSubmit}>Next</button>

      </div>
    </div>
  );
};

export default FormDesgin;
