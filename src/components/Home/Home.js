import React from "react";
import Lottie from "lottie-react";
import animation from "../../assests/animation.json";
const Home = () => {
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
      <div></div>
    </div>
  );
};

export default Home;
