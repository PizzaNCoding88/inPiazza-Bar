// import Image from "next/image";
// import React from "react";
// import MapImg from "../../../public/assets/map.webp";
// import Link from "next/link";

// const Map = () => {
//   const mapsLink =
//     "https://www.google.com/maps/place/in.Piazza+%7C+Aperichic+bar/@40.6639703,14.7904947,16.25z/data=!4m6!3m5!1s0x133bc3c33c8b280f:0x7099dfd151dacb6!8m2!3d40.6641779!4d14.7954408!16s%2Fg%2F11trlvt2qd?entry=ttu";
//   return (
//     <>
//       <Link href={mapsLink} target="_blank" className="lg:w-full">
//         <div className="w-full md:h-full md:aspect-square md:w-full">
//           <Image
//             alt="map"
//             src={MapImg}
//             className="rounded-bl-lg rounded-br-lg md:rounded-bl-none md:rounded-tr-lg"
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//           />
//         </div>
//       </Link>
//     </>
//   );
// };

// export default Map;

"use client";

import Image from "next/image";
import React from "react";
import MapImg from "../../../public/assets/map.webp";
import Link from "next/link";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./Main.css";
import { useMemo } from "react";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const center = useMemo(
    () => ({ lat: 40.66429994536494, lng: 14.795430068234584 }),
    []
  );

  if (!isLoaded)
    return (
      <div className="flex justify-center items-center w-full">
        <div className="loader"></div>
      </div>
    );
  else
    return (
      <>
        {/* <Link href="/" target="_blank" className="lg:w-full">
        <div className="w-full md:h-full md:aspect-square md:w-full">
          <Image
            alt="map"
            src={MapImg}
            className="rounded-bl-lg rounded-br-lg md:rounded-bl-none md:rounded-tr-lg"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </Link> */}
        <div className="aspect-square md:w-full">
          <GoogleMap
            zoom={15}
            center={center}
            mapContainerClassName="map-container"
          >
            <Marker
              position={{ lat: 40.66429994536494, lng: 14.795430068234584 }}
            />
          </GoogleMap>
        </div>
      </>
    );
};

export default Map;
