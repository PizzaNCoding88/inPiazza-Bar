"use client";
import React from "react";
import { useState } from "react";
import Sidebar from "./sidebar";

const Burgermenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  function changeIsOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="h-8 w-11 relative" onClick={() => setIsOpen(!isOpen)}>
        <span
          className={`top-0 left-0 h-[3px] w-9 bg-white rounded-full  inline-block absolute transition ease transform duration-300 ${
            isOpen
              ? "rotate-45 translate-y-3 opacity-50"
              : "rotate-0 translate-y-0"
          }`}
        ></span>
        <span
          className={`h-[2px] w-9 bg-white rounded-full inline-block absolute mt-3 transition ease transform duration-300 ${
            isOpen ? " scale-150 opacity-0" : ""
          }`}
        ></span>
        <span
          className={`h-[2px] w-9 bg-white rounded-full inline-block absolute mt-6 transition ease transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-3 opacity-50 " : "opacity-100"
          }`}
        ></span>
      </div>
      <div
        className={`${
          isOpen ? "absolute top-0 bottom-0 left-0 right-0 bg-white" : ""
        }`}
      ></div>
      <Sidebar isOpen={isOpen} status={changeIsOpen} />
    </>
  );
};

export default Burgermenu;
