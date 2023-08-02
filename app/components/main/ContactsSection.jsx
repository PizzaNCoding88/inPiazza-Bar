import React from "react";
import ContactForm from "./ContactForm";
import Map from "./Map";

const ContactsSection = () => {
  return (
    <section className="py-8">
      <ContactForm />
      <Map />
    </section>
  );
};

export default ContactsSection;
