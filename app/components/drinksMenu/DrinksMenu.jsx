"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Cocktails from "../../../public/assets/menu-cocktails.webp";
import LiquoriChampagne from "../../../public/assets/menu-liquori-champagne.webp";
import LiquoriDessert from "../../../public/assets/menu-liquori-desserts.webp";
import Liquori from "../../../public/assets/menu-liquori.webp";
import Vini from "../../../public/assets/menu-vini-1.webp";
import Menu from "../menu/Menu.jsx";

const zoomVariants = {
  open: { width: "100%" },
  closed: { width: "400px" },
};

const DrinksMenu = () => {
  //
  const [zoomed, setZoomed] = useState(false);

  const setZoom = () => {
    setZoomed(!zoomed);
  };
  return (
    <>
      <section>
        <Menu zoomed={zoomed} setZoom={setZoom} src={Cocktails} />
        <Menu zoomed={zoomed} setZoom={setZoom} src={LiquoriChampagne} />
        <Menu zoomed={zoomed} setZoom={setZoom} src={LiquoriDessert} />
        <Menu zoomed={zoomed} setZoom={setZoom} src={Liquori} />
        <Menu zoomed={zoomed} setZoom={setZoom} src={Vini} />
      </section>

      {/* <section>
        {drinks.map((drinks) => {
          return (
            <>
              <motion.picture
                initial="closed"
                animate={zoomed ? "open" : "closed"}
                variants={zoomVariants}
                onClick={setZoom}
                className="mx-auto py-4 w-full h-full relative"
              >
                <Image
                  src={drinks.src}
                  alt="menu"
                  //   width={zoomed ? "w-full" : "w-[400px] mx-auto"}
                  width={zoomed ? "w-full" : "w-[400px] mx-auto"}
                  //   width={300}
                  //   height={300}
                  //   objectFit="contain"
                  //   //   fill="true"
                  //   layout="fill"
                  className="absolute"
                />
              </motion.picture>
            </>
          );
        })}
      </section> */}
    </>
  );
};

export default DrinksMenu;
