import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useMovietrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  const dispatch = useDispatch();
  const TrailerId = useSelector((store) => store.movies?.movieTrailer);

  useMovietrailer(id);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          TrailerId?.key +
          "?autoplay=1&mute=1"
        } //
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
