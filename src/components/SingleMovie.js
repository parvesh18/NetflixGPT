import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSingleMovieTrailer from "../hooks/useSingleMovieTrailer";
import { useSelector } from "react-redux";
import SingleMovieDetails from "./SingleMovieDetails";
import Footer from "./Footer";
import MovieCredits from "./MovieCredits";
import Header from "./Header";

const SingleMovie = () => {
  const movie = useSelector((store) => store.movies.singleMovieVideo);

  const { movieId } = useParams();
  useSingleMovieTrailer(movieId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!movie) return;

  return (
    <div className="bg-black">
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
      <MovieCredits id={movieId} />
      <Footer />
    </div>
  );
};

export default SingleMovie;
