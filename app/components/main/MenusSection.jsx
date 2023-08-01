"use client";

import React from "react";
import MenuButton from "../button/MenuButton";

const MenusSection = () => {
  return (
    <>
      <section className="menu-section">
        <div className="flex flex-col gap-8 w-[60%] mx-auto">
          <MenuButton text="Gastronomia" link="/" style="menu-btn" />
          <MenuButton text="Champagne" link="/" style="menu-btn" />
          <MenuButton text="Cocktails" link="/" style="menu-btn" />
        </div>
      </section>
    </>
  );
};

export default MenusSection;
