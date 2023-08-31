"use client";

import React from "react";
import Cocktails from "../../../public/assets/menu-cocktails.webp";
import LiquoriChampagne from "../../../public/assets/menu-liquori-champagne.webp";
import LiquoriDessert from "../../../public/assets/menu-liquori-desserts.webp";
import Liquori from "../../../public/assets/menu-liquori.webp";
import Vini from "../../../public/assets/menu-vini-1.webp";
import Food from "../../../public/assets/menu-gastronomia.webp";
import Menu from "./Menu.jsx";
import { useState } from "react";
import "./Menu.css";

const DrinksMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <section>
        <div className="lg:hidden">
          <Menu src={Food} />
          <Menu src={Cocktails} id="cocktails" />
          <Menu src={LiquoriChampagne} />
          <Menu src={LiquoriDessert} />
          <Menu src={Liquori} />
          <Menu src={Vini} />
        </div>
        <div className="large-screens-container">
          <Menu src={Food} />
          <Menu src={Cocktails} id="cocktails" />
          <Menu src={LiquoriChampagne} />
          <Menu src={LiquoriDessert} />
          <Menu src={Liquori} />
          <Menu src={Vini} />
        </div>
      </section>
    </>
  );
};

export default DrinksMenu;
