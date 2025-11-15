import React, { useRef } from "react";
import { FiSend } from "react-icons/fi";
import ai from "../hooks/AiConfig";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBox = () => {
  const dispatch = useDispatch();
  const searchText = useRef();

  const getSuggestedMovies = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const searchQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. example result: Gadar, Sholay, Golmaal, Baaghi, Bhag Milkha Bhag";

    const gptResult = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: searchQuery,
    });
    console.log(gptResult.text);

    const getMovies = gptResult.text.split(",");
    console.log(getMovies);

    const promiseArray = getMovies.map((movie) => getSuggestedMovies(movie));

    const gptmovieResults = await Promise.all(promiseArray);

    const movieResults = gptmovieResults.flat(Infinity);

    console.log(movieResults);

    dispatch(
      addGptMovieResults({
        MovieNames: getMovies,
        MoviesResult: movieResults,
      })
    );

    searchText.current.value = "";
  };

  return (
    <div className="flex items-center justify-center pt-50 pb-14 mx-4 md:pt-40 md:pb-20">
      <form
        action="#"
        className="relative w-[800px]  flex justify-center"
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
    </div>
  );
};

export default GptSearchBox;
