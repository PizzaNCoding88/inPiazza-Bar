"use client";

import React from "react";
import "./FoodMenu.css";
import Image from "next/image";
import Menu from "../../../public/assets/menu-vini-1.webp";

const FoodMenu = () => {
  return (
    <>
      <section>
        <picture className="w-[300px] mx-auto">
          <Image src={Menu} alt="menu" width={300} />
        </picture>
      </section>
    </>
  );
};

export default FoodMenu;
