"use client";

import React from "react";
import Button from "../button/Button";

const MenusSection = () => {
  return (
    <>
      <section className="menu-section">
        <div className="flex flex-col gap-8 w-[60%] mx-auto">
          <Button text="Gastronomia" link="/" style="menu-btn link" />
          <Button text="Champagne" link="/" style="menu-btn link" />
          <Button text="Cocktails" link="/" style="menu-btn link" />
        </div>
      </section>
    </>
  );
};

export default MenusSection;
