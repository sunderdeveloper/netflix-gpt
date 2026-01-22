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
import { HiOutlineSparkles } from "react-icons/hi2";

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
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-[#00FCD0] via-[#209AD9] to-[#9C3DA9] py-2 px-2 rounded-4xl ">
              <button
                className="bg-gray-300 py-2 px-6 rounded-4xl text-gray-600 flex items-center gap-2 text-md font-semibold cursor-pointer"
                onClick={handleShowGpt}
              >
                <span>
                  <HiOutlineSparkles />
                </span>
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
