import React from "react";
import Prenotazioni from "../components/prenotazioni/Prenotazioni";
import "../components/prenotazioni/Prenotazioni.css";
import "../components/main/Main.css";

export const metadata = {
  title: "inPiazza Bar - Prenotazioni",
  description: "Prenota il tuo evento con noi",
};

const page = () => {
  return <Prenotazioni />;
};

export default page;
