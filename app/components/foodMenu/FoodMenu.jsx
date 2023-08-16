"use client";

import React from "react";
import "./FoodMenu.css";
import Image from "next/image";
import Menu from "../../../public/assets/menu-vini-1.webp";

const FoodMenu = () => {
  return (
    <>
      <section>
        <picture>
          <Image src={Menu} alt="menu" height={300} width={300} />
        </picture>
      </section>
    </>
  );
};

export default FoodMenu;
