import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggestions = () => {
  const { MovieNames, MoviesResult } = useSelector((store) => store.gpt);

  if (!MovieNames) return null;

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
