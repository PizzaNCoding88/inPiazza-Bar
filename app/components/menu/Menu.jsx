import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const zoomVariants = {
  open: { width: "100%" },
  closed: { width: "400px" },
};

const Menu = (props) => {
  const { zoomed, setZoom, src } = props;
  return (
    <>
      <motion.picture
        initial="closed"
        animate={zoomed ? "open" : "closed"}
        variants={zoomVariants}
        onClick={setZoom}
        className="mx-auto py-4"
      >
        <Image
          src={src}
          alt="menu"
          width={zoomed ? "w-full" : "w-[400px] mx-auto"}
        />
      </motion.picture>
    </>
  );
};

export default Menu;
