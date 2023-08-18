"use client";

import React from "react";
import Cocktails from "../../../public/assets/menu-cocktails.webp";
import LiquoriChampagne from "../../../public/assets/menu-liquori-champagne.webp";
import LiquoriDessert from "../../../public/assets/menu-liquori-desserts.webp";
import Liquori from "../../../public/assets/menu-liquori.webp";
import Vini from "../../../public/assets/menu-vini-1.webp";
import Menu from "../menu/Menu.jsx";

const DrinksMenu = () => {
  return (
    <>
      <section>
        <Menu src={Cocktails} />
        <Menu src={LiquoriChampagne} />
        <Menu src={LiquoriDessert} />
        <Menu src={Liquori} />
        <Menu src={Vini} />
      </section>
    </>
  );
};

export default DrinksMenu;
