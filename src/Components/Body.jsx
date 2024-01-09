import React, { useContext } from "react";
import VideoCard from "./VideoCard";
import theme from "../Context/theme";

const Body = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const { background } = useContext(theme);

  return (
    <div
      className={
        "flex flex-rows flex-wrap m-1 border border-black h-screen " +
        (background ? "bg-gray-200" : "bg-black text-white border-white")
      }
    >
      {arr.map((digit, index) => {
        return (
          <div key={index}>
            <VideoCard text={digit} />
          </div>
        );
      })}
    </div>
  );
};

export default Body;
