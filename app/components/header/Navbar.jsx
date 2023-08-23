"use client";

import React from "react";
import Burgermenu from "./Burgermenu.jsx";
import Sidebar from "./Sidebar.jsx";
import { useState } from "react";
import Navigation from "./Navigation.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function changeIsOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <nav>
        <Burgermenu status={changeIsOpen} isOpen={isOpen} />
        <Sidebar isOpen={isOpen} status={changeIsOpen} />
        <Navigation />
      </nav>
    </>
  );
};

export default Navbar;
