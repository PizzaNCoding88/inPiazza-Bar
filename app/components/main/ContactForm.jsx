import React from "react";

const ContactForm = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4359a0b1-14fd-4278-b15b-c45673a1d9dc");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setResult(res.message);
    } else {
      setResult(res.message);
    }
  };
  return (
    <>
      <form onSubmit={onSubmit} className="contacts-section_form">
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
            {result}
          </span>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
