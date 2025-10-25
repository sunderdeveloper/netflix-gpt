import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
      <div className="absolute m-6 px-8 py-6">
        <img src={Logo} alt="logo" className="w-42 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
