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
      {card.map((c) => {
        return (
          <>
            <div className="flex flex-col items-center mt-12">
              <div className="w-full relative">
                <Image
                  alt={c.alt}
                  src={c.link}
                  objectFit="cover"
                  className={`${
                    c.link === cocktails ? " min-h-16" : "null"
                  } rounded-tr-[0.4rem] rounded-bl-[0.4rem] rounded-tl-3xl rounded-br-3xl`}
                />
              </div>
              <h2 className="mt-4 text-2xl">{c.title}</h2>
              <p className="mt-2 text-lg text-center">{c.subtitle}</p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
