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
      {/* <form
        //   onSubmit={onSubmit}
        className="bg-form w-full mx-auto rounded-tr-lg rounded-tl-lg p-8 shadow-2xl md:rounded-tr-none md:rounded-bl-lg
         "
      >
        <h3 className="text-center text-primary font-bold text-xl md:text-2xl sm:px-0 xl:text-3xl font-PrimaryF lg:font-SecondaryF lg:mt-[6%] xl:mt-12">
          Inviaci un messaggio
        </h3>
        <label
          htmlFor="name"
          className="text-secondary pl-2 font-PrimaryF relative xl:text-xl"
          aria-label="name"
        >
          <input
            type="text"
            id="name"
            className="bg-transparent block border-b border-b-secondary w-full pl-2 pb-2 mb-2 text-primary focus:outline-none placeholder:text-primary placeholder:font-antic placeholder:font-bold xl:mt-6"
            placeholder="Nome"
            name="name"
            required
          ></input>
        </label>

        <label
          htmlFor="email"
          aria-label="email"
          className="text-primary pl-2 font-PrimaryF -translate-x-8 xl:text-xl"
        >
          <input
            type="email"
            id="email"
            className="bg-transparent block border-b border-b-secondary w-full pl-2 pb-2 mb-2 text-primary focus:outline-none placeholder:text-primary placeholder:font-antic placeholder:font-bold xl:mt-4"
            placeholder="Email"
            name="email"
            required
          ></input>
        </label>

        <label htmlFor="textarea" aria-label="textaread">
          <textarea
            id="textarea"
            name="Text"
            className="bg-transparent block border-b border-b-secondary w-full pl-2 pb-2 mb-4 text-primary focus:outline-none placeholder:text-primary placeholder:font-antic placeholder:font-bold mt-8 xl:mt-12 xl:text-xl"
            placeholder="Message"
          ></textarea>
        </label>
        <input
          type="submit"
          className="text-primary bg-transparent border-2 border-secondary px-8 py-1 rounded-lg block mx-auto hover:bg-secondary hover:text-additional
          transition-all duration-300 font-PrimaryF xl:mt-12"
          aria-label="submit"
        />
        <span className=" text-primary mx-auto text-center block"> */}
      {/* RESULT HERE */}
      {/* </span> */}
      {/* </form> */}
    </>
  );
};

export default ContactForm;
