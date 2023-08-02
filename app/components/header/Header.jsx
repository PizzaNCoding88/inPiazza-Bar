import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header_wrapper">
          <Logo />
          <Navbar />
        </div>
      </header>
    </>
  );
};

export default Header;
