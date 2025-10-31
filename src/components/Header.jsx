import React from "react";
import Logo from "../assets/logo.png";
import userIcon from "../assets/usericon.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div>
      <div className="absolute px-6 py-4 flex items-center justify-between w-full">
        <div>
          <img src={Logo} alt="logo" className="md:w-42 cursor-pointer w-34" />
        </div>

        {user && (
          <div className="flex items-center gap-2">
            <img src={userIcon} alt="" className="w-12 rounded-sm" />
            <button
              onClick={handleSignOut}
              className="font-bold cursor-pointer"
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
