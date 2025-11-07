import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="-mt-30 z-20 relative">
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title="Popular" movies={movies.PopularMovies} />
      <MovieList title="Top Rated" movies={movies.topRated} />
      <MovieList title="Upcoming" movies={movies.upComingMovies} />
    </div>
  );
};

export default SecondaryContainer;
