"use client";

import React from "react";
import Policy from "../components/ppolicy/Policy";
import { motion } from "framer-motion";

const page = () => {
  return (
    <>
      <motion.main
        className="bg-customGrey text-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <Policy />
      </motion.main>
    </>
  );
};

export default page;
