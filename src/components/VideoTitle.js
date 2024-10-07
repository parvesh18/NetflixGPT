import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen absolute aspect-video bg-gradient-to-r from-black via-transparent pt-40 pl-16  text-white">
      <h1 className="font-bold text-4xl tracking-wide">{title}</h1>
      <p className="w-2/5 mt-4">{description}</p>
      <div className="mt-6 text-lg">
        <button className="bg-white text-black hover:bg-opacity-80 font-semibold px-10 py-2 rounded-lg">
          Play
        </button>
        <button className="bg-gray-700 hover:bg-opacity-80 text-white font-semibold px-6 py-2 rounded-lg ml-3">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
