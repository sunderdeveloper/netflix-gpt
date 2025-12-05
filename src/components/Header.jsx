import React, { useEffect } from "react";
import Logo from "../assets/logo.png";
import userIcon from "../assets/usericon.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { CiSearch } from "react-icons/ci";
import { toggleGptSearch } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;

        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleShowGpt = () => {
    dispatch(toggleGptSearch());
  };
  return (
    <div>
      <div className="absolute px-6 py-8 md:py-4 flex flex-col gap-5 items-center justify-between w-full z-100 md:flex-row">
        <div>
          <img
            src={Logo}
            alt="logo"
            className=" md:w-42 cursor-pointer w-30 "
          />
        </div>

        {user && (
          <div className="flex items-center gap-2">
            <div className="bg-white  p-1 rounded-4xl mr-6 ">
              <button
                className="text-sm md:text-md text-gray-900 flex items-center gap-1 md:gap-2 py-1  px-4 md:px-6 border-1 border-gray-600 rounded-2xl cursor-pointer"
                onClick={handleShowGpt}
              >
                {showGptSearch ? "Home Page" : "Search using AI"}
              </button>
            </div>
            <h1 className="w-10 h-10 rounded-4xl bg-red-700 text-white capitalize text-2xl text-center font-semibold cursor-pointer leading-9">
              {user.displayName?.slice(0, 1)}
            </h1>
            <button
              onClick={handleSignOut}
              className="text-sm md:text-md font-bold cursor-pointer text-white"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
