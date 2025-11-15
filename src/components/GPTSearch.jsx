import React from "react";
import GptSearchBox from "./GptSearchBox";
import GptSuggestions from "./GptSuggestions";

const GPTSearch = () => {
  return (
    <div className="bg-black h-screen">
      <GptSearchBox />
      <GptSuggestions />
    </div>
  );
};

export default GPTSearch;
