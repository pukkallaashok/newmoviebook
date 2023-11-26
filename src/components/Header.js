import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../Utilits/firebase";
import { addUserCredentials, removeUser } from "../Utilits/userSlice";
import { useNavigate } from "react-router-dom";
import { addAIsearch } from "../Utilits/AISlice";
import { Supported_Language, logoImg } from "../Utilits/constants";
import { addLangChange } from "../Utilits/LangSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const toggleAIState = useSelector((store) => store.AIsearch.toggleAIState);
  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const handleSignIn = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        naviagte("/error");
      });
  };
  const handleLangChange = (e) => {
    dispatch(addLangChange(e.target.value));
  };

  const handleAIsearchButton = () => {
    dispatch(addAIsearch());
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, photoURL, displayName, email } = user;
        dispatch(
          addUserCredentials({
            uid: uid,
            photoURL: photoURL,
            displayName: displayName,
            email: email,
          })
        );
        naviagte("/browser");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        naviagte("/");
      }
      return () => unSubscribe();
    });
  }, []);
  return (
    <div className="w-screen p-4 absolute z-10 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between">
      <img className="w-36 md:w-52  mx-auto md:mx-0" src={logoImg} alt="logo" />

      {user && (
        <div className="flex md:p-2 pl-24 md:pl-0 text-sm md:text-base">
          {toggleAIState && (
            <select
              className="p-1 mx-1 bg-gray-600 text-white rounded-lg"
              onChange={handleLangChange}
            >
              {Supported_Language.map((lang) => (
                <option key={lang.idetifier} value={lang.idetifier}>
                  {lang.langName}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-indigo-600 text-white p-1 md:p-4 rounded-lg font-bold mx-1 md:mx-2 text-sm md:text-base"
            onClick={handleAIsearchButton}
          >
            {!toggleAIState ? "AI Search" : "Home-Page"}
          </button>
          <button
            className="bg-indigo-600 text-white p-1 md:p-4 rounded-lg font-bold mx-1 md:mx-2 text-sm md:text-base"
            onClick={handleSignIn}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
