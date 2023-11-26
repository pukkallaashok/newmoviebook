import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingData && (
      <div className="bg-black w-screen">
        <div className="-mt-0 md:-mt-36 pl-4  relative z-20 ">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingData} />
          <MovieList title={"Trending"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.TopRated} />
          <MovieList title={"Upcoming"} movies={movies.Upcoming} />
        </div>
      </div>
    )
  );
};

export default SecondContainer;
