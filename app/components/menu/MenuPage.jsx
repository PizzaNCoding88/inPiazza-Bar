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
import MenuModal from "./MenuModal";

const DrinksMenu = () => {
<<<<<<< HEAD
=======
  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(!isOpen);
  }
>>>>>>> 21f4ab20011f5aaa1b434854c420de3da2a6d3de
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
        <div className="lg:flex lg:gap-4 px-4 lg:h-screen lg:items-center">
<<<<<<< HEAD
          <Menu src={Food} />

=======
          <button onClick={openModal}>
            <Menu src={Food} />
          </button>
>>>>>>> 21f4ab20011f5aaa1b434854c420de3da2a6d3de
          <Menu src={Cocktails} id="cocktails" />
          <Menu src={Cocktails} />
          <Menu src={LiquoriChampagne} />
          <Menu src={LiquoriDessert} />
          <Menu src={Liquori} />
          <Menu src={Vini} />
        </div>
<<<<<<< HEAD
=======
        {isOpen && <MenuModal src={Food} status={openModal} />}
>>>>>>> 21f4ab20011f5aaa1b434854c420de3da2a6d3de
      </section>
    </>
  );
};

export default DrinksMenu;
