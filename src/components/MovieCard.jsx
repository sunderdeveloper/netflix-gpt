import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-46 relative">
      <img
        className="rounded-md cursor-pointer"
        src={IMG_CDN_URL + posterPath}
        alt=""
      />
    </div>
  );
};

export default MovieCard;
