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
          className={`top-0 left-0 header_navbar_burger-menu_wrapper_span ${
            isOpen
              ? "opacity-0 transition-opacity duration-75"
              : "rotate-0 translate-y-0"
          }`}
        ></span>
        <span
          className={`mt-3 header_navbar_burger-menu_wrapper_span translate-x-2 ${
            isOpen ? " opacity-0 transition-opacity duration-75" : ""
          }`}
        ></span>
        <span
          className={`mt-6 header_navbar_burger-menu_wrapper_span ${
            isOpen ? "opacity-0 transition-opacity duration-75 " : "opacity-100"
          }`}
        ></span>
      </div>
    </>
  );
};

export default Burgermenu;
