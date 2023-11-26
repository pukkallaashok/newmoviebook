import React, { useRef, useState } from "react";
import { bgImg } from "../Utilits/constants";
import Header from "./Header";
import Validate from "./Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utilits/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserCredentials } from "../Utilits/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [alertMessage, seterrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleCredentials = () => {
    const message = Validate(email.current.value, password.current.value);
    seterrorMessage(message);
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, photoURL, displayName, email } = auth.currentUser;
              dispatch(
                addUserCredentials({
                  uid: uid,
                  photoURL: photoURL,
                  displayName: displayName,
                  email: email,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              seterrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          seterrorMessage("Invalid mailId/password or user already exists");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage("Invalid mail Id or password");
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute w-screen">
        <img
          className="h-screen object-cove w-screen"
          src={bgImg}
          alt="bgImg"
        />
      </div>
      <form
        className="absolute  mx-auto  bg-black w-[90%] md:w-3/12 right-0 left-0 p-12 my-40 rounded-lg bg-opacity-70"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className=" text-white font-bold text-3xl my-4">
          {isSignIn ? "Sign IN" : "Sign UP"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="text-white font-bold px-5 p-2 my-4 w-[90%] md:w-full rounded-lg bg-gray-500"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="text-white font-bold px-5 p-2 my-4 w-[90%] md:w-full rounded-lg bg-gray-500"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="text-white font-bold px-5 p-2 my-4 w-[90%] md:w-full rounded-lg bg-gray-500"
        />
        <p className="m-2 font-bold text-red-400">{alertMessage}</p>
        <button
          className="bg-indigo-600 text-white px-5 w-[90%] md:w-full my-6 p-2 rounded-lg"
          onClick={handleCredentials}
        >
          {isSignIn ? " Sign IN " : " Sign UP "}
        </button>
        <p className=" text-white m-2 py-10">
          {isSignIn ? "New to Netflix? " : "Already a member "}
          <span className="font-bold cursor-pointer" onClick={handleSignIn}>
            {!isSignIn ? " Sign IN " : " Sign UP "}
          </span>
          Now
        </p>
      </form>
    </div>
  );
};

export default Login;
