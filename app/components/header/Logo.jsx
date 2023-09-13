import React from "react";
import logo from "../../../public/assets/logo.webp";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <>
      <motion.div
        className="header_wrapper_logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <Link href="/" className=" cursor-pointer">
          <Image
            src={logo}
            alt="logo image"
            className="header_wrapper_logo_image"
          ></Image>
        </Link>
      </motion.div>
    </>
  );
};

export default Logo;
