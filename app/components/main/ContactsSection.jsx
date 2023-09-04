import React from "react";
import ContactForm from "./ContactForm";
import Map from "./Map";

const ContactsSection = () => {
  const location = {
    address: "Via Posidonia, 409, 84129 Salerno SA, Italy",
    lat: 40.66418448374763,
    lng: 14.795443478778227,
  };
  return (
    <section className="contacts-section" id="contacts">
      <div className="contacts-section_container">
        <ContactForm />
        <Map />
      </div>
    </section>
  );
};

export default ContactsSection;
