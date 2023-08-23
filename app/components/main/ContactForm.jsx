import React from "react";

const ContactForm = () => {
  return (
    <>
      <form
        //   onSubmit={onSubmit}
        className="bg-form w-4/5 mx-auto rounded-tr-lg rounded-tl-lg px-8 py-8 shadow-3xl sm:max-w-[40rem] md:rounded-tr-none md:rounded-bl-lg lg:max-w-[50%]"
      >
        <h3 className="text-center text-primary font-bold text-xl md:text-2xl lg:mt-0 sm:px-0 xl:text-3xl font-PrimaryF lg:font-SecondaryF">
          Inviaci un messaggio
        </h3>
        <label
          htmlFor="name"
          className="text-secondary pl-2 font-PrimaryF relative"
          aria-label="name"
        >
          <input
            type="text"
            id="name"
            className="bg-transparent block border-b border-b-secondary w-full pl-2 pb-2 mb-2 text-primary focus:outline-none placeholder:text-primary placeholder:font-antic placeholder:font-bold"
            placeholder="Nome"
            name="name"
            required
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          ></input>
        </label>

        <label
          htmlFor="email"
          aria-label="email"
          className="text-primary pl-2 font-PrimaryF -translate-x-8"
        >
          <input
            type="email"
            id="email"
            className="bg-transparent block border-b border-b-secondary w-full pl-2 pb-2 mb-2 text-primary focus:outline-none placeholder:text-primary placeholder:font-antic placeholder:font-bold"
            placeholder="Email"
            name="email"
            required
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          ></input>
        </label>

        <label htmlFor="textarea" aria-label="textaread">
          <textarea
            id="textarea"
            name="Text"
            className="bg-transparent block border-b border-b-secondary w-full pl-2 pb-2 mb-4 text-primary focus:outline-none placeholder:text-primary placeholder:font-antic placeholder:font-bold mt-8"
            placeholder="Message"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          ></textarea>
        </label>
        <input
          type="submit"
          className="text-primary bg-transparent border-2 border-secondary px-8 py-1 rounded-lg block mx-auto hover:bg-secondary hover:text-additional
          transition-all duration-300 font-PrimaryF"
          aria-label="submit"
        />
        <span className=" text-primary mx-auto text-center block">
          {/* RESULT HERE */}
        </span>
      </form>
    </>
  );
};

export default ContactForm;
