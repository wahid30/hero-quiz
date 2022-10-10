import React from "react";
import { Link } from "react-router-dom";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
const Headers = () => {
  return (
    <div className="bg-indigo-300">
      <div className="flex mx-auto w-9/12 justify-between p-5 items-center">
        <div>
          <Link
            to="/"
            className="flex items-center gap-1 bg-indigo-500 p-2 rounded-2xl"
          >
            <PencilSquareIcon className="h-6 w-6 text-yellow-300" />
            <h2 className="text-white">Hero Quiz</h2>
          </Link>
        </div>
        <nav>
          <Link
            to="/home"
            className="mx-2 hover:text-indigo-800 hover:text-[20px] ease-in-out duration-300"
          >
            Home
          </Link>
          <Link
            to="/topics"
            className="mx-2  hover:text-indigo-800 hover:text-[20px] ease-in-out duration-300"
          >
            Topics
          </Link>
          <Link
            to="/statistics"
            className="mx-2  hover:text-indigo-800 hover:text-[20px] ease-in-out duration-300"
          >
            Statistics
          </Link>
          <Link
            to="blogs"
            className="mx-2  hover:text-indigo-800 hover:text-[20px] ease-in-out duration-300"
          >
            Blogs
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Headers;
