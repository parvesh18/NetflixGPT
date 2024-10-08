import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies.nowPlayingMovies) return;
  if (!movies.popularMovies) return;
  if (!movies.upcomingMovies) return;
  if (!movies.topRatedMovies) return;

  return (
    <div className="bg-black text-white pb-10">
      <div className="relative -mt-40 z-20 bg-transparent">
        <MovieList title="Trending" movies={movies.topRatedMovies} />
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
        <MovieList title="Horror" movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
