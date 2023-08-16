import React from "react";
import "./Prenotazioni.css";
import ContactsSection from "../main/ContactsSection";

const prenotazioni = () => {
  return (
    <>
      <main>
        <section>
          <div className="prenotazioni_container">
            <h1 className="font-antic">
              Organizza il tuo evento con noi inviandoci un messaggio usando il
              modulo qui sotto. risponderemo il prima possibile.
            </h1>
          </div>
        </section>
        <ContactsSection />
      </main>
    </>
  );
};

export default prenotazioni;
