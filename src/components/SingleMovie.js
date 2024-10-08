import React from "react";
import { useParams } from "react-router-dom";
import useSingleMovieTrailer from "../hooks/useSingleMovieTrailer";
import { useSelector } from "react-redux";
import SingleMovieDetails from "./SingleMovieDetails";

const SingleMovie = () => {
  const movie = useSelector((store) => store.movies.singleMovieVideo);

  const { movieId } = useParams();
  useSingleMovieTrailer(movieId);

  if (!movie) return;

  return (
    <div className="">
      <div className="-mt-[70px]">
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${movie.key}?&autoplay=1&mute=1&controls=0`}
          title="YouTube video player"
          allow="accelerometer; &autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <SingleMovieDetails />
    </div>
  );
};

export default SingleMovie;
