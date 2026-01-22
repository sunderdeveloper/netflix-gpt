import { useEffect } from "react";
import { addNowPlayingMovies, setLoading } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies,
  );
  const getNowPlayingMovies = async () => {
    dispatch(setLoading(true));
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS,
    );
    const dataJson = await data.json();

    dispatch(addNowPlayingMovies(dataJson.results));
    dispatch(setLoading(false));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
