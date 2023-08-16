"use client";

import React from "react";
import "./FoodMenu.css";
import Image from "next/image";
import Menu from "../../../public/assets/menu-vini-1.webp";
import { useState } from "react";

const FoodMenu = () => {
  const [zoomed, setZoomed] = useState();

  const setZoom = () => {
    setZoomed(!zoomed);
  };
  return (
    <>
      <section>
        {/* <picture className="w-[400px] mx-auto"> */}
        <picture
          className={zoomed ? "w-full" : "w-[400px] mx-auto"}
          onClick={setZoom}
        >
          <Image
            src={Menu}
            alt="menu"
            width={zoomed ? "w-full" : "w-[400px] mx-auto"}
          />
        </picture>
      </section>
    </>
  );
};

export default FoodMenu;
