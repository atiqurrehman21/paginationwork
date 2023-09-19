import React from 'react'

const NewLetter = ({animation}) => {
  return (
    <div className={`${animation?"":" animate-fade-in"} bg-[#F9FAFB] flex w-full   flex-col gap-6 justify-center items-center py-10 rounded-sm px-12`}>
    <h1 className="font-bold  text-[#4E4E4E]  text-4xl">
      Join the Newsletter
    </h1>
    <p className="text-[#868686]  font-normal text-base mt-4">
      Want to be the first to know when new tutorial is out? Sign up
      below.
    </p>
    <div className="flex w-full gap-3 justify-center items-center">
      <input
        className="w-full text-black border-solid rounded-sm border-[1px] py-3 px-3 hover:outline-none focus:outline-none"
        type="text"
        placeholder="Enter Email address"
      />
      <button className="bg-[#146BAB] w-40  py-3 px-5 text-white rounded-sm">
        Sign up
      </button>
    </div>
    <p className="text-[#868686]  font-normal text-base mt-4">
      We won't send you spam. Unsubscribe at any time.
    </p>
    <a
      href="https://convertkit.com?utm_source=dynamic&amp;amp;utm_medium=referral&amp;amp;utm_campaign=poweredby&amp;amp;utm_content=form"
      target="_blank"
     
      data-element="powered-by"
      data-variant="dark"
    >
      Built with ConvertKit
    </a>
  </div>
  )
}

export default NewLetter