"use client";

import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./Main.css";
import { useMemo } from "react";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBDTAB59SFOlgkJaMX - bZi4UOv0W57MQ2w",
  });

  const center = useMemo(
    () => ({ lat: 40.664188385009766, lng: 14.795440673828125 }),
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
        <div className="aspect-square md:w-full">
          <GoogleMap
            zoom={15}
            center={center}
            mapContainerClassName="map-container"
          >
            <Marker
              position={{ lat: 40.664188385009766, lng: 14.795440673828125 }}
            />
          </GoogleMap>
        </div>
      </>
    );
};

export default Map;
