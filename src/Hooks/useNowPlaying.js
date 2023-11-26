import { useEffect } from "react";
import { API_Options } from "../Utilits/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingData } from "../Utilits/moviesSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_Options
    );
    const json = await data.json();
    console.log(json);
    dispatch(addNowPlayingData(json.results));
  };
  useEffect(() => {
    nowPlaying();
  }, []);
};

export default useNowPlaying;
