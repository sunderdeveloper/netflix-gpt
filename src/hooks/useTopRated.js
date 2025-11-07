import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopratedMovies } from "../utils/moviesSlice";

const useTopRated = () => {
  const dispatch = useDispatch();
  const getTopratedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?&page=1",
      API_OPTIONS
    );

    const topMoviesData = await data.json();
    dispatch(addTopratedMovies(topMoviesData.results));
  };

  useEffect(() => {
    getTopratedMovies();
  }, []);
};

export default useTopRated;
