import React from "react";
import "./Topic.css";
const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="bg-black custom-radius" src={logo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-indigo-800">{name}</h2>
          <p>There have total of {total} Quiz</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Start</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
