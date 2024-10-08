import React from "react";
import { FaPlay } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, description }) => {
  const trailer = useSelector((store) => store.movies.trailerVideo);
  if (!trailer) return;
  console.log(trailer.trailerId);
  return (
    <div className="w-screen absolute aspect-video bg-gradient-to-r from-black via-transparent pt-48 pl-16  text-white">
      <h1 className="font-bold text-3xl tracking-wide">{title}</h1>
      <p className="w-2/5 mt-4 text-sm">{description}</p>
      <div className="mt-6 text-lg ">
        <Link to={`${trailer.trailerId}`}>
          <button className="bg-white text-black hover:bg-opacity-80 font-semibold px-10 py-2 rounded-lg text-base">
            <FaPlay className="inline-block mb-1 mr-1" />
            <span>Play</span>
          </button>
        </Link>
        <button className="bg-gray-700 hover:bg-opacity-80 text-white font-semibold px-6 py-2 rounded-lg text-base ml-3">
          <LuInfo className="inline-block text-xl mb-1 mr-1" />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
