import React, { useState } from "react";

function Form() {
  const [inputFields, setInputFields] = useState([
    { value: "", label: "Email Address" },
  ]);
  const [label, setLabel] = useState("");
  const [details,setDetails] = useState(false)
  const [result, setResult] = useState([]);

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ value: "", label: `${label}` });
    setInputFields(values);
    setLabel("");
  };
  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };
  const Result = () => {
    const myresult = [...inputFields];
    setInputFields(myresult);
  };
  if(typeof window !== 'undefined'){
    document.onclick=()=>{
      setDetails(false)

    }
  }
  return (
    <div className="grid relative  flex-col px-5   bg-gray-900 py-8 justify-center align-baseline gap-3">
      {inputFields.map((inputField, index) => (
        <div
          class="mt-2 flex  justify-center  items-center max-w-md md:gap-x-4 min-[363px]:gap-x-[0.2rem]"
          key={index}
        >
          <label for="email-address" class="sr text-white capitalize">
            {inputField.label}:
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            value={inputField.value}
            onChange={(e) => handleInputChange(index, e)}
            autocomplete="email"
            required
            class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            onClick={handleRemoveFields}
          >
            Remove
          </button>
        </div>
      ))}
      <div className="flex  justify-center gap-5">
        <button
          className={`rounded-md md:w-48 sm:w-14 bg-orange-400 px-3.5 py-2.5 text-sm font-semibold ${
            label ? "opacity-1" : "opacity-40"
          }  text-white shadow-sm hover:bg-orange-300`}
          type="button"
          onClick={() => label && handleAddFields()}
        >
          Add New Input Field
        </button>
        <button
          className="rounded-md md:w-48 sm:w-14 bg-orange-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-300"
          type="button"
          onClick={(e)=>{
            e.stopPropagation()
            setDetails(!details)
          }}
        >
          Update Full Form
        </button>
      </div>
      <div className="flex  justify-center gap-5 items-center">
        <label for="label-name" class="sr text-white">
          Enter Label Name:
        </label>
        <input
          id="label-name"
          name="label"
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          autocomplete="label"
          required
          class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          placeholder="Enter Label Name"
        />
      </div>

     {details && <div
        id="logout"
        className="absolute bg-white top-16 py-2 rounded-lg border border-neutral-200 shadow-lg shadow-[#757575]/6 items-center z-10 right-0 -mt-2"
      >
        <button onClick={(e)=>{
          e.stopPropagation();
          setDetails(false)
        }} className="cursor-pointer flex items-center space-x-3 px-4 text-sm leading-14 text-neutral-600 hover:text-brand transition-all duration-300 py-2">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.3471 16.1102C13.279 14.9173 11.7271 14.1667 9.99991 14.1667C8.27269 14.1667 6.72081 14.9173 5.65271 16.1102"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 11.6667C11.3807 11.6667 12.5 10.5474 12.5 9.16667C12.5 7.78596 11.3807 6.66667 10 6.66667C8.61929 6.66667 7.5 7.78596 7.5 9.16667C7.5 10.5474 8.61929 11.6667 10 11.6667Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span> User Profile</span>
        </button>
        <button
          className="px-4 py-2 text-sm leading-14 flex items-center space-x-3 text-neutral-600 hover:text-brand transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation();
            setDetails(true)
          }}
        >
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12.5L2.5 10L5 7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.8333 10L2.5 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.33337 5.83334L8.33337 4.16667C8.33337 3.70643 8.70647 3.33334 9.16671 3.33334L16.6667 3.33334C17.1269 3.33334 17.5 3.70643 17.5 4.16667L17.5 15.8333C17.5 16.2936 17.1269 16.6667 16.6667 16.6667L9.16671 16.6667C8.70647 16.6667 8.33337 16.2936 8.33337 15.8333L8.33337 14.1667"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span> Logout</span>
        </button>
      </div>}
    </div>
  );
}

export default Form;
