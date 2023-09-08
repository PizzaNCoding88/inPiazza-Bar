"use client";

import React from "react";
import "./Storia.css";
import Image from "next/image";
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
        <h1 className="header_storia">Chi Siamo</h1>
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
                    className={`storia_container_card ${
                      data.id % 2 === 0 ? "" : "lg:!flex-row-reverse"
                    }`}
                  >
                    <div className="about-us__img-container">
                      <Image
                        src={data.src}
                        alt={data.alt}
                        objectFit="cover"
                        fill="true"
                      />
                    </div>
                    <div>
                      <p className="about-us_paragraph">{data.paragraph1}</p>
                      <br></br>
                      <p className="about-us_paragraph1">{data.paragraph2}</p>
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
