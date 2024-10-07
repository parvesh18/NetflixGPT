import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerId = useSelector((store) => store.movies?.trailerVideo?.key);

  useMovieTrailer(movieId);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerId}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; &autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
