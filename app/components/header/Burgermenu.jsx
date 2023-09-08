import React from "react";

const Burgermenu = (props) => {
  const { isOpen, status } = props;
  return (
    <>
      <div
        className={`transition-all duration-300 md:hidden ${
          isOpen ? "header_navbar_burger-menu" : "invisible"
        }`}
        onClick={() => status()}
      ></div>
      <div
        className="header_navbar_burger-menu_wrapper md:hidden"
        onClick={() => status()}
      >
        <span
          className={`header_navbar_burger-menu_wrapper_span ${
            isOpen ? "open" : "closed"
          }`}
        ></span>
        <span
          className={`mt-3 header_navbar_burger-menu_wrapper_span translate-x-2 ${
            isOpen ? " open" : ""
          }`}
        ></span>
        <span
          className={`mt-6 header_navbar_burger-menu_wrapper_span ${
            isOpen ? "open" : "opacity-100"
          }`}
        ></span>
      </div>
    </>
  );
};

export default Burgermenu;
