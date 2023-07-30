import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <header className="fixed pt-8 z-30 w-full ">
        <div className="w-4/5 flex justify-between items-center mx-auto">
          <Logo />
          <Navbar />
        </div>
      </header>
    </>
  );
};

export default Header;
