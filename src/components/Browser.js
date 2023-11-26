import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import useNowPlaying from "../Hooks/useNowPlaying";
import usePopular from "../Hooks/usePopular";
import useTopRated from "../Hooks/useTopRated";
import useUpcoming from "../Hooks/useUpcoming";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browser = () => {
  useNowPlaying();
  usePopular();
  useTopRated();
  useUpcoming();

  const toggleAIState = useSelector((store) => store.AIsearch.toggleAIState);

  return (
    <div>
      <Header />
      {toggleAIState ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
