import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Quizes = () => {
  const quizes = useLoaderData().data.questions;
  // console.log(quizes);
  // const { id, name, questions } = quizes;
  // console.log(questions);
  // const navigate = useNavigate();
  return (
    <div className="mx-auto w-9/12 mt-10 ">
      {quizes.map((quiz) => (
        <Quiz key={quiz.id} quiz={quiz}></Quiz>
      ))}
    </div>
  );
};

export default Quizes;
