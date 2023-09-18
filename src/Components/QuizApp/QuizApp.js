import React, { useState } from "react";
import { quiz } from "./Quizjson";
const QuizApp = () => {
  const [quizlist, setQuizlist] = useState(quiz);
  const [ChecktedValue, setIsCheckedValue] = useState("");
  const [CurrentQuestions, setCurrentQuestions] = useState(0);
  const [yourResult, setYourResult] = useState(false);
  const [result, setResult] = useState(0);

  const HandleChange = (it) => {
    setIsCheckedValue(it);
  };
  const HandleSubmit = () => {
    const answers = quizlist.questions[CurrentQuestions].correctAnswer;
    if (answers === ChecktedValue) {
      let answer = result;
      answer =answer+5;
      setResult(answer);
      setIsCheckedValue("");
    }
    if (CurrentQuestions === quizlist.questions.length - 1) {
      setYourResult(true);
    } else {
      setCurrentQuestions(CurrentQuestions + 1);
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(90.04deg, #800080 0.03%, #ffc0cb 99.96%)",
      }}
      className="flex min-h-[100vh] justify-center  items-center"
    >
      {/* Quiz Container */}
      {yourResult ? (
        <div className=" max-w-[700px] min-w-[250px] rounded-md  px-8  py-16 bg-white w-full text-[#830582] ">
          <div className=" flex justify-center items-center flex-col gap-5">
            <p className=" font-bold">Result</p>
            <p className=" font-bold">Total Questions:{quizlist.questions.length}</p>
            <p className=" font-bold">Total Score:{result}</p>
            <p className=" font-bold">Correct Answer:{result/5}</p>
            <p className=" font-bold">Wrong Answer:{quizlist.questions.length-result/5}</p>


            
            
          </div>
        </div>
      ) : (
        <div className=" max-w-[700px] min-w-[250px] rounded-md  px-8  py-16 bg-white w-full">
          <h1 className=" text-2xl font-bold">
            {" "}
            <span className="text-[#830582] ">
              {CurrentQuestions < 10 ? "0" : ""}
              {CurrentQuestions + 1}
            </span>
            /<span className="text-[#830582]">{quizlist.questions.length}</span>
          </h1>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold text-[#6F283E] w-full">
              {quizlist?.questions[CurrentQuestions].question}
            </p>
            {quizlist?.questions[CurrentQuestions].choices.map((it) => (
              <div
                className={` flex items-center gap-5 cursor-pointer border-solid border-[1px] ${
                  it === ChecktedValue
                    ? "border-[#C466A8] bg-[#FFD6FF]"
                    : "border-black bg-white"
                }  rounded-2xl py-4 px-2 `}
                onClick={(e) => {
                  HandleChange(it);
                }}
              >
                {/* <input className='py-3 h-15 ' type='radio' name={it} checked={it===ChecktedValue}/> */}
                <p> {it}</p>
              </div>
            ))}
          </div>
          <button
            style={{
              background:
                "linear-gradient(90.04deg, #800080 0.03%, #ffc0cb 99.96%)",
            }}
            className=" float-right outline-none text-2xl px-9 text-white py-3 mt-6 rounded-md"
            onClick={HandleSubmit}
          >
            {" "}
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
