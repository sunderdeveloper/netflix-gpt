import React, { useEffect } from "react";
import Logo from "../assets/logo.png";
import userIcon from "../assets/usericon.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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
