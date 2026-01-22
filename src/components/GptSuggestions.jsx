import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Loader from "./Loader";

const GptSuggestions = () => {
  const { MovieNames, MoviesResult } = useSelector((store) => store.gpt);
  const isLoading = useSelector((store) => store.movies.isLoading);

  if (!MovieNames) return null;

  if (isLoading) {
    return (
      <div className="bg-black h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <div className="bg-black">
        {<MovieList title={""} movies={MoviesResult} />}
      </div>
      {/* {<MovieList title={MovieNames[0]} movies={MoviesResult[0]} />} */}
    </div>
  );
};

export default GptSuggestions;
