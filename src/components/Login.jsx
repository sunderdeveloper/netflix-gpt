import React, { useRef, useState } from "react";
import Header from "./Header";
import { Validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import background from "../assets/background.jpg";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleFormValidation = () => {
    const usernameValue = isSignInForm ? "" : username.current.value;
    const message = Validate(
      usernameValue,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = "Invalid Credentials";
          const errorMessage = error.message;
          setErrorMessage(errorCode);
        });
    }
  };

  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <div className="w-full h-screen bg-black opacity-50 fixed"></div>
      <Header />
      <div>
        <img
          src={background}
          alt=""
          className="h-screen w-full object-cover object-center"
        />
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-8 bg-[#050505ca] md:w-3/12 rounded-md w-10/12">
          <h3 className="text-white font-normal text-2xl mb-8">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-5"
          >
            {!isSignInForm && (
              <input
                ref={username}
                type="text"
                placeholder="Username"
                className="bg-gray-700 p-3 rounded-sm placeholder-gray-400 text-white"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="bg-gray-700 p-3 rounded-sm placeholder-gray-400 text-white"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="bg-gray-700 p-3 rounded-sm placeholder-gray-400 text-white"
            />
            <p className="text-red-600 font-semibold">{errorMessage}</p>

            <button
              onClick={handleFormValidation}
              className="w-full mt-4 bg-[#C11119] p-2 rounded-sm text-white cursor-pointer"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <div className="mt-14 mb-8 text-white cursor-pointer">
            <p onClick={handleSignInForm}>
              {isSignInForm
                ? "New to Netflix? Sign Up Now"
                : "Already registered? Sign In"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
