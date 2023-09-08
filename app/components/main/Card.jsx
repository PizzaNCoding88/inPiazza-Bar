"use client";

import React from "react";
import Image from "next/image";
import radioCity from "../../../public/assets/radiocity_1.webp";
import cocktails from "../../../public/assets/cocktail1.webp";
import aperitivo from "../../../public/assets/aperitivo1.webp";
import esterno from "../../../public/assets/esterno1.webp";
import { motion } from "framer-motion";

const Card = () => {
  const card = [
    {
      link: radioCity,
      title: "Eventi",
      subtitle: "Contattaci per qualsiasi evento",
      alt: "Radio City",
    },
    {
      link: cocktails,
      title: "Cocktails",
      subtitle: "Un'estensiva lista cocktails",
      alt: "Radio City",
    },
    {
      link: aperitivo,
      title: "Aperitivi",
      subtitle: "Vieni a provare i nostri aperitivi",
      alt: "Radio City",
    },
    {
      link: esterno,
      title: "Divertimento",
      subtitle: "Serate di puro divertimento con i nostri eventi",
      alt: "Radio City",
    },
  ];
  return (
    <>
      {card.map((c, i) => {
        return (
          <>
            <div
              className={`images-section_card-container ${
                i % 2 === 0 ? "" : "odd"
              } ${i === 0 ? "" : "consecutives"}`}
            >
              <motion.div
                className="images-section_pic-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  alt={c.alt}
                  src={c.link}
                  style={{ objectFit: "cover" }}
                  fill={true}
                />
              </motion.div>
              <motion.div
                className={`text-center ${
                  i % 2 === 0
                    ? "images-section_text-container-right"
                    : "images-section_text-container-left"
                }`}
                initial={{ x: `${i % 2 === 0 ? "20%" : "-20%"}`, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="images-section_title">{c.title}</h2>
                <p className="images-section_description">{c.subtitle}</p>
              </motion.div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
