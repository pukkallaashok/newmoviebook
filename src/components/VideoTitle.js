import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[35%] md:pt-[20%] px-6 md:px-24 w-screen aspect-video absolute text-white bg-gradient-to-tr from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black py-2 md:py-4 px-4 md:px-12  text-xl hover:bg-opacity-70 rounded-lg md:font-bold my-2 md:m-0">
          Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white p-4 px-12  text-xl bg-opacity-50 rounded-lg mx-2 font-bold">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
