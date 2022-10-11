// import React, { useState } from "react";
import "./Quiz.css";
import { EyeIcon } from "@heroicons/react/24/solid";
const Quiz = ({ quiz }) => {
  const { question, options, correctAnswer } = quiz;
  // console.log(correctAnswer);
  // const [checkIcon, setCheckIcon] = useState(false);
  // const handleIconClicked = () => {
  //   // console.log(correctAnswer);
  // };
  return (
    <div>
      <div className="rounded-[10px] shadow-xl bg-green-100 my-5 p-5">
        <div className="flex justify-between items-center">
          <h2 className="font-bold">{question}</h2>
          <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title  text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content flex justify-end">
              <p>
                <EyeIcon className="w-[20px] text-black"></EyeIcon>
              </p>
            </div>
            <div className="collapse-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <p>{correctAnswer}</p>
            </div>
          </div>
        </div>
        <div className="p-3 flex flex-col">
          {options.map((option, idx) => (
            <button
              key={idx}
              className="btn btn-outline btn-primary mt-2 custom-quiz"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
