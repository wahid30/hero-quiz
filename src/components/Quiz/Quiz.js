// import React, { useState } from "react";
import "./Quiz.css";
import { EyeIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Quiz = ({ quiz }) => {
  const { question, options, correctAnswer } = quiz;
  const notify = (event) => {
    let yourAnswer = event.target.innerHTML;
    if (yourAnswer === correctAnswer) {
      toast("Correct!!!");
    } else {
      toast("Wrong Answer!");
    }
  };
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
            <div key={idx}>
              <button
                onClick={notify}
                className="btn btn-outline btn-primary mt-2 custom-quiz"
              >
                {option}
              </button>
              <ToastContainer />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
