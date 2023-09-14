"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import data from "../../data/cardData";

const Card = () => {
  return (
    <>
      {data.map((data, i) => (
        <div
          key={i}
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
              alt={data.alt}
              src={data.link}
              style={{ objectFit: "cover" }}
              fill={true}
              sizes="100%"
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
            <h2 className="images-section_title">{data.title}</h2>
            <p className="images-section_description">{data.subtitle}</p>
          </motion.div>
        </div>
      ))}
    </>
  );
};

export default Card;
