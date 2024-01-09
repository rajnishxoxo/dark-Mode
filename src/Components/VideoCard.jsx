import React from "react";

const VideoCard = ({ text }) => {
  return (
    <div className="flex flex-col">
      <div className="w-40 h-40 border border-black">
        <h1 className="items-center">{text}</h1>
      </div>
    </div>
  );
};

export default VideoCard;
