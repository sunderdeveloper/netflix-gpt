import React from "react";
import { FaPlay } from "react-icons/fa6";
import { MdOutlineInfo } from "react-icons/md";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute text-white pt-[50%] sm:pt-[30%] pl-6 md:pt-[15%] md:pl-10 z-20 ">
      <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
      <p className="text-md md:font-md w-[90%] md:w-[550px] mt-4">{overview}</p>
      <div className="flex gap-5 mt-6">
        <button className="bg-[#ffffff] flex items-center gap-1 md:gap-2 px-4 py-1 md:px-6  md:py-2 rounded-sm text-black text-sm">
          <FaPlay /> Play
        </button>
        <button className="bg-[#90909067] flex items-center gap-1 md:gap-2 px-4 py-1 md:px-6  md:py-2 rounded-sm text-white">
          <MdOutlineInfo /> More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
