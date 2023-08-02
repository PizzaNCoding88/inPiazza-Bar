import React from "react";

const Burgermenu = (props) => {
  const { isOpen, status } = props;
  return (
    <>
      <div
        className={`transition-all duration-300 ${
          isOpen ? "header_navbar_burger-menu" : "invisible"
        }`}
        onClick={() => status()}
      ></div>
      <div
        className="header_navbar_burger-menu_wrapper"
        onClick={() => status()}
      >
        <span
          className={`top-0 left-0 header_navbar_burger-menu_wrapper_span ${
            isOpen
              ? "rotate-45 translate-y-3 opacity-50"
              : "rotate-0 translate-y-0"
          }`}
        ></span>
        <span
          className={`mt-3 header_navbar_burger-menu_wrapper_span translate-x-2 ${
            isOpen ? " scale-150 opacity-0" : ""
          }`}
        ></span>
        <span
          className={`mt-6 header_navbar_burger-menu_wrapper_span ${
            isOpen ? "-rotate-45 -translate-y-3 opacity-50 " : "opacity-100"
          }`}
        ></span>
      </div>
    </>
  );
};

export default Burgermenu;
