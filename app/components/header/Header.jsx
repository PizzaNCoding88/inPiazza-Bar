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

  const scroll = window.scrollY;
  const offset = 50;

  const router = usePathname();

  return (
    <>
      <header
        className={`header ${scroll < offset ? "" : "opacity-0"} ${
          router != "/" ? "h-[7rem] bg-headerBG static" : ""
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
