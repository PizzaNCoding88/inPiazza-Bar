import React from "react";
import Hero from "./Hero";
import ImageSection from "./ImageSection";
import "./Main.css";
import MenusSection from "./MenusSection";
import ContactsSection from "./ContactsSection";

const Main = () => {
  return (
    <>
      <main>
        <Hero />
        <ImageSection />
        <MenusSection />
        <ContactsSection />
      </main>
    </>
  );
};

export default Main;
