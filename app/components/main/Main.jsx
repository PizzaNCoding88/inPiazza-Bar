"use client";
import React from "react";
import Hero from "./Hero";
import ImageSection from "./ImageSection";
import "./Main.css";
import ContactsSection from "./ContactsSection";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Hero />
        <ImageSection />
        <ContactsSection />
      </motion.main>
    </>
  );
};

export default Main;
