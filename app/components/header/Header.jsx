"use client";

import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  });

  const router = usePathname();

  const headerHeight = 30;
  return (
    <>
      <header
        className={`header ${
          scroll < headerHeight
            ? "transition-all duration-100"
            : "opacity-0 transition-all duration-100"
        } ${
          router != "/"
            ? " bg-gradient-to-r from-secondary to-slate-600 static bg-auto"
            : ""
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
