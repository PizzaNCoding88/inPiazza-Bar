import Image from "next/image";
import React from "react";
import MapImg from "../../../public/assets/map.webp";
import Link from "next/link";

const Map = () => {
  const mapsLink =
    "https://www.google.com/maps/place/in.Piazza+%7C+Aperichic+bar/@40.6639703,14.7904947,16.25z/data=!4m6!3m5!1s0x133bc3c33c8b280f:0x7099dfd151dacb6!8m2!3d40.6641779!4d14.7954408!16s%2Fg%2F11trlvt2qd?entry=ttu";
  return (
    <>
      <Link href={mapsLink} target="_blank" className="lg:w-full">
        <div className="w-full md:h-full md:aspect-square md:w-full">
          <Image
            alt="map"
            src={MapImg}
            className="rounded-bl-lg rounded-br-lg md:rounded-bl-none md:rounded-tr-lg"
            // sizes="100vw"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </Link>
    </>
  );
};

export default Map;
