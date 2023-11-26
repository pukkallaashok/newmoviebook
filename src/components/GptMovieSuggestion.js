import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieTitle, movieData } = useSelector((data) => data.AIsearch);
  return (
    <div className="p-4 m-4  bg-opacity-90">
      <div className="bg-black">
        {movieTitle?.map((movieTitle, index) => (
          <MovieList
            key={movieTitle}
            title={movieTitle}
            movies={movieData[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
