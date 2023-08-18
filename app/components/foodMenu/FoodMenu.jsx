"use client";

import React from "react";
import "./FoodMenu.css";
import Image from "next/image";
import Menu from "../../../public/assets/menu-gastronomia.webp";

const FoodMenu = () => {
  return (
    <>
      <section>
        <picture className="mx-auto py-4">
          <Image src={Menu} alt="menu" objectFit="cover" />
        </picture>
      </section>
    </>
  );
};

export default FoodMenu;
