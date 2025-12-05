import React, { useEffect, useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const cardsRef = useRef();

  const handleScroll = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleScroll);
  }, []);

  return (
    <div className="px-4 md:px-9 pb-8">
      <h1 className="text-white font-semibold text-[22px] md:text-2xl mb-4">
        {title}
      </h1>
      <div className="flex overflow-x-scroll scroll-none" ref={cardsRef}>
        <div className="flex items-center gap-4">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              movieTitle={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
