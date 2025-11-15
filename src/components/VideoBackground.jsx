import React from "react";
import { API_OPTIONS, IMG_CDN_URL } from "../utils/constants";

import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId, background }) => {
  useMovieTrailer(movieId);

  return (
    <div className="w-full md:w-full bg-img">
      {/* <iframe
        width="100%"
        height="100%"
        className="w-full aspect-video md:h-screenw-full"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&loop=1&playlist=${trailerVideo?.key}&controls=0&modestbranding=1&rel=0&showinfo=0`}
        title="YouTube video player"
        allow=" autoplay;  encrypted-media;"
      ></iframe> */}

      <img
        className="w-full h-[80vh] relative object-cover object-center md:h-screen"
        src={IMG_CDN_URL + background}
      />
    </div>
  );
};

export default VideoBackground;
