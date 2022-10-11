import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
const Topics = () => {
  const topics = useLoaderData().data;
  // console.log(topics);
  return (
    <div className="cart-container mt-10 px-10 py-5">
      {topics.map((topic) => (
        <Topic key={topic.id} topic={topic}></Topic>
      ))}
    </div>
  );
};

export default Topics;
