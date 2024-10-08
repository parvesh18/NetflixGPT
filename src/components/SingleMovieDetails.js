import React from "react";
import { FaPlay, FaBackspace } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import { useSelector } from "react-redux";

const SingleMovieDetails = () => {
  const { movieId } = useParams();
  const movieDetails = useSelector((store) => store.movies.movieDetails);
  useMovieDetails(movieId);

  if (!movieDetails) return;

  return (
    <div>
      <div>
        <Link to="/browse">
          <button className="absolute top-0 rounded-lg text-white text-4xl ml-5 mt-2 hover:scale-110 duration-300">
            <FaBackspace />
          </button>
        </Link>
        <div className="absolute top-24 text-white px-8 pb-10">
          <h1 className="text-4xl font-bold tracking-wider w-1/2 mb-4">
            {movieDetails.title}
          </h1>
          <div className="mt-3 font-semibold ml-1">
            <span>{movieDetails.release_date} </span>
            <div className=" inline-block">
              <span className="px-1 text-gray-300"> • </span>
              <span>3 Languages</span>
              <span className="px-1 text-gray-300"> • </span>
            </div>
            <span>{movieDetails.runtime} minutes</span>
            <span className="px-1 text-gray-300">•</span>
            <span>U/A 13+</span>
          </div>
          <p className="mt-3 w-1/3 text-sm m-1">{movieDetails.overview}</p>
          <ul className="mt-3 list-disc ml-1 font-semibold">
            {movieDetails.genres.map((genre, index) => (
              <li className="inline-block pr-3" key={genre.id}>
                <span>{genre.name} </span>
                {movieDetails.genres.length !== index + 1 && (
                  <span className="ml-2">|</span>
                )}
              </li>
            ))}
          </ul>
          <ul className="mt-4 list-disc ml-1 font-semibold">
            <li className="inline-block pr-3 bg-black px-4 text-sm bg-opacity-30 cursor-pointer py-2 rounded-2xl hover:opacity-80 duration-200 tracking-wider mr-2">
              English
            </li>
            <li className="inline-block pr-3 bg-black px-4 text-sm bg-opacity-30 cursor-pointer py-2 rounded-2xl hover:opacity-80 duration-200 tracking-wider mr-2">
              Hindi
            </li>
            <li className="inline-block pr-3 bg-black px-4 text-sm bg-opacity-30 cursor-pointer py-2 rounded-2xl hover:opacity-80 duration-200 tracking-wider">
              Spanish
            </li>
          </ul>

          <div className="mt-6">
            <button className="bg-white hover:scale-105 duration-500 text-black font-bold text-xl px-16 py-[10px] rounded-md tracking-wider">
              <FaPlay className="inline-block text-xl mb-1 mr-1" />
              <span> Subscribe to Watch</span>
            </button>
            <button className="text-2xl font-bold bg-black px-5 pb-3 pt-2 rounded-md bg-opacity-40 ml-3 hover:bg-white hover:bg-opacity-15 duration-200">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovieDetails;
