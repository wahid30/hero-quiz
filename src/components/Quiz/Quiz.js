import React from "react";

const Quiz = ({ quiz }) => {
  const { question, options, correctAnswer } = quiz;
  // console.log(options);
  return (
    <div>
      <div className="rounded-[10px] shadow-xl bg-green-100 my-5 p-5">
        <h2 className="font-bold">{question}</h2>
        <div className="p-3">
          {options.map((option, idx) => (
            <li key={idx}>
              <button className="btn btn-outline btn-primary mt-2">
                {option}
              </button>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
