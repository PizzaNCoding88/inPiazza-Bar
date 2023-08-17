"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Cocktails from "../../../public/assets/menu-cocktails.webp";

const zoomVariants = {
  open: { width: "100%" },
  closed: { width: "400px" },
};

const DrinksMenu = () => {
  const [zoomed, setZoomed] = useState(false);

  const setZoom = () => {
    setZoomed(!zoomed);
  };
  return (
    <>
      <section>
        <motion.picture
          initial="closed"
          animate={zoomed ? "open" : "closed"}
          variants={zoomVariants}
          onClick={setZoom}
          className="mx-auto py-4"
        >
          <Image
            src={Cocktails}
            alt="menu"
            width={zoomed ? "w-full" : "w-[400px] mx-auto"}
          />
        </motion.picture>
      </section>
    </>
  );
};

export default DrinksMenu;
