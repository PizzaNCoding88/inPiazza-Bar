import React from "react";
import ContactForm from "./ContactForm";
import Map from "./Map";

const ContactsSection = () => {
  const location = {
    address: "Via Posidonia, 409, 84129 Salerno SA, Italy",
    lat: 40.664308083616376,
    lng: 14.79541933889615,
  };
  return (
    <section
      className="py-8 bg-contactsSectionBg bg-cover bg-right md:py-16"
      id="contacts"
    >
      <div className="flex flex-col md:flex-row md:w-4/5 md:mx-auto md:gap-0">
        <ContactForm />
        <div className="hidden md:block md:w-[2px] md:bg-black "></div>
        <Map />
      </div>
    </section>
  );
};

export default ContactsSection;
