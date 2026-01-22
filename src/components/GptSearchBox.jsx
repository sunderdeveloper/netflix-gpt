import React, { useRef } from "react";
import { FiSend } from "react-icons/fi";
import ai from "../hooks/AiConfig";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovieResults } from "../utils/gptSlice";
import { setLoading } from "../utils/moviesSlice";

const GptSearchBox = () => {
  const dispatch = useDispatch();
  const searchText = useRef();
  // const inputValue = searchText.current.value.trim();

  const userName = useSelector((store) => store.user);

  // if (!inputValue) {
  //   console.log("please enter a value");
  // }

  const getSuggestedMovies = async (movie) => {
    dispatch(setLoading(true));
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const searchQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. example result: Gadar, Sholay, Golmaal, Baaghi, Bhag Milkha Bhag";

    const gptResult = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: searchQuery,
    });

    const getMovies = gptResult.text.split(",");

    const promiseArray = getMovies.map((movie) => getSuggestedMovies(movie));

    const gptmovieResults = await Promise.all(promiseArray);

    const movieResults = gptmovieResults.flat(Infinity);

    dispatch(
      addGptMovieResults({
        MovieNames: getMovies,
        MoviesResult: movieResults,
      }),
    );
    dispatch(setLoading(false));

    searchText.current.value = "";
  };

  return (
    <div className="flex flex-col items-center justify-center pt-50 pb-14 mx-4 md:pt-40 md:pb-20">
      <h1 className="text-red-700 mb-10 capitalize text-2xl md:text-3xl font-semibold text-center">
        Hi {userName.displayName} let's find a great movie
      </h1>

      <form
        action="#"
        className="relative w-full md:w-[800px]  flex justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="bg-white w-full px-4 h-20 rounded-lg md:h-28 md:rounded-md"
          type="text"
          placeholder="What would you like to watch today"
        />
        <button
          className="bg-red-500 text-white absolute p-1 rounded-xs right-3 bottom-3 cursor-pointer md:p-2 md:right-5 md:bottom-5"
          onClick={handleGptSearchClick}
        >
          {" "}
          <FiSend />{" "}
        </button>
      </form>
      <div className="mt-10 text-white flex items-start justify-center gap-4 flex-wrap md:flex-nowrap">
        <h3 className="text-lg">Related Searches: </h3>
        <div className="flex items-center flex-wrap justify-center">
          <span className="bg-[#90909067] px-5 py-2 rounded-3xl cursor-pointer mx-3 md:my-0 my-3">
            Hindi Horror <b className="ml-2 text-red-500 text-lg">&times;</b>
          </span>
          <span className="bg-[#90909067] px-5 py-2 rounded-3xl cursor-pointer mx-3 md:my-0 my-3">
            Tollywood Action{" "}
            <b className="ml-2 text-red-500 text-lg">&times;</b>
          </span>
          <span className="bg-[#90909067] px-5 py-2 rounded-3xl cursor-pointer mx-3 md:my-0 my-3">
            Telugu Drama <b className="ml-2 text-red-500 text-lg">&times;</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default GptSearchBox;
