import React from "react";
import Hero from "./Hero";
import ImageSection from "./ImageSection";
import "./Main.css";
import ContactsSection from "./ContactsSection";

const Main = () => {
  return (
    <>
      <main>
        <Hero />
        <ImageSection />
        <ContactsSection />
      </main>
    </>
  );
};

export default Main;
