import React from "react";
import Hero from "./Hero";
import ImageSection from "./ImageSection";
import "./Main.css";
import MenusSection from "./MenusSection";

const Main = () => {
  return (
    <>
      <main>
        <Hero />
        <ImageSection />
        <MenusSection />
      </main>
    </>
  );
};

export default Main;
