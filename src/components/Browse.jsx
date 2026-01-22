import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const Browse = () => {
  const showGpt = useSelector((store) => store.gpt.showGptSearch);
  const isLoading = useSelector((store) => store.movies.isLoading);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();

  if (isLoading) {
    return (
      <div className="bg-black h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-black">
      <Header />
      {showGpt ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
