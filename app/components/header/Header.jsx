"use client";

import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Header = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  });

  // const handleScroll = () => {
  //   const currentScrollPos = window.scrollY;

  //   // if (currentScrollPos > prevScrollPos) {
  //   //   setVisible(false);
  //   // } else {
  //   //   setVisible(true);
  //   // }

  //   setPrevScrollPos(currentScrollPos);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  const router = usePathname();

  const headerHeight = 30;
  return (
    <>
      <header
        className={`header ${
          scroll < headerHeight
            ? "transition-all duration-100"
            : "opacity-0 transition-all duration-100"
        } ${router != "/" ? "h-[7rem] bg-headerBG static bg-auto" : ""}`}
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
