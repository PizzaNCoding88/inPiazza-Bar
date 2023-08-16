"use client";

import React from "react";
import "./FoodMenu.css";
import Image from "next/image";
import Menu from "../../../public/assets/menu-vini-1.webp";
import { useState } from "react";
import { motion } from "framer-motion";

const zoomVariants = {
  open: { width: "100%" },
  closed: { width: "400px" },
};

const FoodMenu = () => {
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
          className="mx-auto"
        >
          <Image
            src={Menu}
            alt="menu"
            width={zoomed ? "w-full" : "w-[400px] mx-auto"}
          />
        </motion.picture>
      </section>
    </>
  );
};

export default FoodMenu;
