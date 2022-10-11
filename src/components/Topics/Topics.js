import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import Lottie from "lottie-react";
import animation from "../../assests/animation.json";
const Topics = () => {
  const topics = useLoaderData().data;
  return (
    <div>
      <div className="bg-black h-[100vh] flex items-center justify-center">
        <div className="flex items-center mx-auto w-[90%] custom-class">
          <div>
            <p className="text-white text-[18px]">
              ''Motivation is the process by which goal-oriented behaviors are
              initiated, guided, and maintained. It is what motivates you to
              take action, whether it is grabbing a glass of water to quench
              your thirst or reading a book to expand your knowledge''
            </p>
          </div>
          <div>
            <Lottie animationData={animation} loop={true} />;
          </div>
        </div>
      </div>
      <div className="cart-container mt-10 px-10 py-5 mx-auto w-9/12">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Topics;
