import React from "react";
import Image from "next/image";
import radioCity from "../../../public/assets/radiocity_1.webp";
import cocktails from "../../../public/assets/cocktail1.webp";
import aperitivo from "../../../public/assets/aperitivo1.webp";
import esterno from "../../../public/assets/esterno1.webp";

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
              <div className="images-section_pic-container">
                <Image
                  alt={c.alt}
                  src={c.link}
                  style={{ objectFit: "cover" }}
                  fill={true}
                />
              </div>
              <div
                className={`text-center ${
                  i % 2 === 0
                    ? "images-section_text-container-right"
                    : "images-section_text-container-left"
                }`}
              >
                <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  {c.title}
                </h2>
                <p className="mt-2 md:text-xl md:pt-2 lg:text-2xl xl:text-3xl">
                  {c.subtitle}
                </p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
