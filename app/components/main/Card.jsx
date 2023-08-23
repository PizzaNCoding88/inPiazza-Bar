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
              className={`flex flex-col items-center mt-12 sm:w-4/5 sm:mx-auto  ${
                i % 2 === 0 ? "sm:items-start" : "sm:items-end"
              }`}
            >
              <div className="w-full relative h-64 aspect-video">
                <Image
                  alt={c.alt}
                  src={c.link}
                  style={{ objectFit: "cover" }}
                  fill="true"
                  className="rounded-tr-[0.4rem] rounded-bl-[0.4rem] rounded-tl-3xl rounded-br-3xl"
                />
              </div>
              <div
                className={`text-center ${
                  i % 2 === 0 ? "sm:text-left" : "sm:text-right"
                }`}
              >
                <h2 className="mt-4 text-2xl">{c.title}</h2>
                <p className="mt-2 text-lg text-center">{c.subtitle}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
