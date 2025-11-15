import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-34 relative md:w-46">
      <img
        className="rounded-md cursor-pointer"
        src={IMG_CDN_URL + posterPath}
        alt=""
      />
    </div>
  );
};

export default MovieCard;
