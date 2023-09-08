import React from "react";

const ContactForm = () => {
  return (
    <>
      <form
        //   onSubmit={onSubmit}
        className="contacts-section_form"
      >
        <div className="contacts-section_form_content">
          <h3>Inviaci un messaggio</h3>
          <label htmlFor="name" aria-label="name">
            <input
              type="text"
              id="name"
              className=""
              placeholder="Nome"
              name="name"
              required
            ></input>
          </label>
          <label htmlFor="email" aria-label="email">
            <input
              type="email"
              id="email"
              className="block"
              placeholder="Email"
              name="email"
              required
            ></input>
          </label>
          <label htmlFor="textarea" aria-label="textaread">
            <textarea
              id="textarea"
              name="Text"
              placeholder="Message"
            ></textarea>
          </label>
          <input type="submit" className="submit-input" aria-label="submit" />
          <span className=" text-primary mx-auto text-center block">
            {/* RESULT HERE */}
          </span>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
