import React from "react";
import "./Quiz.css";
import { EyeIcon } from "@heroicons/react/24/solid";
const Quiz = ({ quiz }) => {
  const { question, options, correctAnswer } = quiz;
  // console.log(options);
  return (
    <div>
      <div className="rounded-[10px] shadow-xl bg-green-100 my-5 p-5">
        <div className="flex justify-between items-center">
          <h2 className="font-bold">{question}</h2>
          <button>
            <EyeIcon className="w-[20px] hover:text-blue-700"></EyeIcon>
          </button>
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
