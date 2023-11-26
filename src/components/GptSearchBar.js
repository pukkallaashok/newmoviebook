import React, { useRef } from "react";
import lang from "../Utilits/Language";
import { useDispatch, useSelector } from "react-redux";
import openai from "../Utilits/openai";
import { API_Options } from "../Utilits/constants";
import { addMovieResults } from "../Utilits/AISlice";

const GptSearchBar = () => {
  const langType = useSelector((store) => store.lang.langType);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchTMDBmovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_Options
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearch = async () => {
    const GptContent =
      "Act a movie suggestion platform and give suggestions according to query: " +
      searchText.current.value +
      ",give the list of 5 movies with coma separate like example given above. Example: Hit,Hit-2,Major,Goodachari,Vikram";

    const getResults = await openai.chat?.completions.create({
      messages: [{ role: "user", content: GptContent }],
      model: "gpt-3.5-turbo",
    });

    const getMovies = getResults?.choices?.[0]?.message?.content.split(",");

    const movieArray = getMovies.map((movie) => searchTMDBmovie(movie));

    const tmdbResults = await Promise.all(movieArray);

    console.log(tmdbResults);

    dispatch(
      addMovieResults({ movieTitle: getMovies, movieData: tmdbResults })
    );
  };

  return (
    <div className="pt-[37%] md:pt-[15%] flex justify-center">
      <form
        className="w-full md:w-1/2  bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-2 md:p-4 m-2 md:m-4 col-span-9 rounded-lg"
          type="text"
          placeholder={lang[langType].Description}
        />
        <button
          className=" py-1 md:py-2 px-2 md:px-4 bg-indigo-600 rounded-lg col-span-3 m-4 font-bold text-white"
          onClick={handleGPTSearch}
        >
          {lang[langType].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
