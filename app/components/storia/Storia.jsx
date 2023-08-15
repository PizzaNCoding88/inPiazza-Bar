"use client";
import React from "react";
import "./Storia.css";
import Image from "next/image";
import apertura from "../../../public/assets/apertura.webp";

const Storia = () => {
  return (
    <>
      <main>
        <section className="about-us mt-4">
          <div className="container">
            <h1 className="text-5xl font-medium ">Chi Siamo</h1>
            <div className="about-us__img-container">
              <Image
                src={apertura}
                alt="opening pic"
                className="rounded-tr-[0.4rem] rounded-bl-[0.4rem] rounded-tl-3xl rounded-br-3xl w-full h-full"
              />
            </div>
            <p className="text-xl">
              Benvenuti ad In Piazza, il nostro bar, champagneria e cocktail
              lounge! <br /> <br />
              Siamo due amici che, dopo anni di duro lavoro, sacrifici e sogni,
              abbiamo finalmente deciso di realizzare il nostro sogno aprendo un
              bar che offrisse esperienze uniche e indimenticabili.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Storia;
