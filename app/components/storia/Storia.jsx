"use client";
import React from "react";
import "./Storia.css";
import Image from "next/image";
// import apertura from "../../../public/assets/apertura.webp";
// import cocktail from "../../../public/assets/cocktail1.webp";
// import champagne from "../../../public/assets/champagne.webp";
// // import logo from "../../../public/assets/champagne.webp";
// import window from "../../../public/assets/window.webp";
import { motion } from "framer-motion";
import data from "../../data/storiaData";

const Storia = () => {
  return (
    <>
      <motion.main
        className="font-antic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-medium [text-shadow:_4px_4px_10px_rgba(0,0,0,0.8)] text-black text-center pt-10 bg-form">
          Chi Siamo
        </h1>
        {data.map((data) => {
          return (
            <>
              <section
                className={`${data.id % 2 === 0 ? "bg-form" : "bg-primary"}`}
              >
                <div
                  className={`storia_container text-black ${
                    data.id % 2 === 0 ? "" : "text-white"
                  }`}
                >
                  <div
                    className={`lg:flex lg:flex-row lg:items-center gap-8 ${
                      data.id % 2 === 0 ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div className="about-us__img-container">
                      <Image
                        src={data.src}
                        alt={data.alt}
                        objectFit="cover"
                        fill="true"
                        className="rounded-tr-[0.4rem] rounded-bl-[0.4rem] rounded-tl-3xl rounded-br-3xl w-full h-full "
                      />
                    </div>
                    <div>
                      <p className="text-xl mt-6 lg:text-2xl xl:text-3xl">
                        {data.paragraph1}
                      </p>
                      <br></br>
                      <p className="text-xl lg:text-2xl xl:text-3xl">
                        {data.paragraph2}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </>
          );
        })}
        <section className="bg-form">
          <div className="storia_container text-black">
            <p className="text-xl xl:text-3xl">
              Vi aspettiamo nel nostro bar, champagneria e cocktail lounge per
              farvi vivere esperienze uniche e indimenticabili. I nostri drink,
              la nostra selezione di champagne e la nostra ospitalità vi
              conquisteranno fin dal primo istante. Siete i benvenuti nel nostro
              mondo di sapori, colori e sensazioni.
            </p>
          </div>
        </section>
      </motion.main>
    </>
  );
};

export default Storia;
