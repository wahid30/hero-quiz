import React from "react";
import { Link, NavLink } from "react-router-dom";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import "./Headers.css";
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
        <nav className="custom-headers">
          <NavLink
            to="/topics"
            className={({ isActive }) =>
              isActive ? "mx-2 text-red-600" : "mx-2"
            }
          >
            Topics
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              isActive ? "mx-2 text-red-600" : "mx-2"
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to="blogs"
            className={({ isActive }) =>
              isActive ? "mx-2 text-red-600" : "mx-2"
            }
          >
            Blogs
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Headers;
