"use client";

import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

import { useState, useEffect } from "react";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const router = usePathname();

  return (
    <>
      {console.log(router)}
      <header
        className={`header ${visible ? "" : "opacity-0"} ${
          router != "/" ? "bg-red-500" : ""
        }`}
      >
        <div className="header_wrapper">
          <Logo />
          <Navbar />
        </div>
      </header>
    </>
  );
};

export default Header;
