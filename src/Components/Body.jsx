import React from "react";
import VideoCard from "./VideoCard";

const Body = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15];

  return (
    <div className="flex flex-rows flex-wrap m-1 border border-black h-screen bg-gray-200">
      {arr.map((digit) => {
        return (
          <div>
            <VideoCard text={digit} />
          </div>
        );
      })}
    </div>
  );
};

export default Body;
