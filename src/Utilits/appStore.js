import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import AIsearchReducer from "./AISlice";
import langReducer from "./LangSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    AIsearch: AIsearchReducer,
    lang: langReducer,
  },
});

export default appStore;
