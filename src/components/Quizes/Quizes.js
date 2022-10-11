import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
const Quizes = () => {
  const quizes = useLoaderData().data.questions;
  const name = useLoaderData().data;
  return (
    <div className="mx-auto w-9/12 mt-10 ">
      <h2 className="text-center text-2xl text-indigo-700 font-bold">
        The Quiz of : {name.name}
      </h2>
      {quizes.map((quiz) => (
        <Quiz key={quiz.id} quiz={quiz}></Quiz>
      ))}
    </div>
  );
};

export default Quizes;
