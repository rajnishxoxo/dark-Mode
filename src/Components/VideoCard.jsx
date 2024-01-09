import React, { useContext } from "react";
import theme from "../Context/theme";

const VideoCard = ({ text }) => {
  const { background } = useContext(theme);

  return (
    <div className="flex flex-col">
      <div
        className={
          "w-40 h-40 border border-black" +
          (background ? "" : "border-white")
        }
      >
        <h1 className="items-center">{text}</h1>
      </div>
    </div>
  );
};

export default VideoCard;
