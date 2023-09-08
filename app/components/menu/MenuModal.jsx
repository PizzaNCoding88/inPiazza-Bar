import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const MenuModal = (props) => {
  const { src } = props;
  return (
    <>
      <motion.div
        className="modal-bg"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.2,
          },
        }}
        exit={{
          opacity: 0.5,
          transition: {
            duration: 0.2,
            delay: 0.01,
          },
        }}
      >
        <motion.div
          className="lg:h-[90%] lg:w-1/2"
          initial={{
            opacity: 0,
            scale: 0.75,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              ease: "easeInOut",
              duration: 0.25,
              delay: 0.05,
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.75,
            transition: {
              ease: "easeInOut",
              duration: 0.2,
            },
          }}
        >
          <Image src={src} alt="modal-pic" style={{ objectFit: "cover" }} />
        </motion.div>
      </motion.div>
    </>
  );
};

export default MenuModal;
