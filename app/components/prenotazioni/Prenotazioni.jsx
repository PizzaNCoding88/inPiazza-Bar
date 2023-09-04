"use client";
import React from "react";
import "./Prenotazioni.css";
import ContactsSection from "../main/ContactsSection";
import { motion } from "framer-motion";

const prenotazioni = () => {
  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <section>
          <div className="prenotazioni_container">
            <h1 className="font-antic">
              Organizza il tuo evento con noi inviandoci un messaggio usando il
              modulo qui sotto. risponderemo il prima possibile.
            </h1>
          </div>
        </section>
        <ContactsSection />
      </motion.main>
    </>
  );
};

export default prenotazioni;
