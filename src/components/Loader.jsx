import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="h-20 w-20 rounded-full border-6 border-gray-600 border-t-red-600 animate-spin"></div>
    </div>
  );
};

export default Loader;
