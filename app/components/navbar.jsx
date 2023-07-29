"use client";

import React from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.webp";
import Burgermenu from "./burgermenu";
import Sidebar from "./sidebar";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function changeIsOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="w-4/5 mx-auto pt-8 flex justify-between items-center">
        <div className="h-12 w-12 relative">
          <Image
            src={logo}
            alt="logo"
            fill="true"
            className="w-full object-contain rounded-full"
          ></Image>
        </div>
        <Burgermenu status={changeIsOpen} isOpen={isOpen} />
        <Sidebar isOpen={isOpen} status={changeIsOpen} />
      </div>
    </>
  );
};

export default Navbar;
