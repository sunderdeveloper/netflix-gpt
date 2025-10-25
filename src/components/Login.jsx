import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInFrom, setIsSignInForm] = useState(true);

  const handleSignInForm = () => {
    setIsSignInForm(!isSignInFrom);
  };
  return (
    <div>
      <div className="w-full h-screen bg-black opacity-60 fixed"></div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9ba9f0e2-b246-47f4-bd1f-3e84c23a5db8/web/IN-en-20251020-TRIFECTA-perspective_d6da84e9-6145-4b1e-bb51-e402c966a045_large.jpg"
          alt=""
        />
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-8 bg-[#050505ca] w-3/12 rounded-md">
          <h3 className="text-white font-normal text-2xl mb-8">
            {isSignInFrom ? "Sign In" : "Sign Up"}
          </h3>
          <form className="flex flex-col gap-5">
            {!isSignInFrom && (
              <input
                type="text"
                placeholder="Username"
                className="bg-gray-700 p-3 rounded-sm placeholder-white text-white"
              />
            )}
            <input
              type="email"
              placeholder="Email Address"
              className="bg-gray-700 p-3 rounded-sm placeholder-white text-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-700 p-3 rounded-sm placeholder-white text-white"
            />

            <button className="w-full mt-4 bg-[#C11119] p-2 rounded-sm text-white cursor-pointer">
              {isSignInFrom ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <div className="mt-14 mb-8 text-white cursor-pointer">
            <p onClick={handleSignInForm}>
              {isSignInFrom
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
