import React from "react";
import Button from "../button/Button";

const MenusSection = () => {
  return (
    <>
      <section className=" bg-menuSectionBg py-8">
        <Button text="Gastonomia" link="/" />
        <Button text="Champagne" link="/" />
        <Button text="Cocktails" link="/" />
      </section>
    </>
  );
};

export default MenusSection;
