import React from "react";

const Burgermenu = (props) => {
  const { isOpen, status } = props;
  return (
    <>
      <div
        className={`transition-all duration-300  ${
          isOpen
            ? "visible fixed top-0 bottom-0 left-0 right-0 bg-black opacity-30"
            : " invisible"
        }`}
        onClick={() => status()}
      ></div>
      <div className="h-8 w-11 relative" onClick={() => status()}>
        <span
          className={`top-0 left-0 h-[4px] w-9 bg-form rounded-full  inline-block absolute transition ease transform duration-300 ${
            isOpen
              ? "rotate-45 translate-y-3 opacity-50"
              : "rotate-0 translate-y-0"
          }`}
        ></span>
        <span
          className={`h-[4px] w-9 bg-form rounded-full inline-block absolute mt-3 transition ease transform duration-300 ${
            isOpen ? " scale-150 opacity-0" : ""
          }`}
        ></span>
        <span
          className={`h-[4px] w-9 bg-form rounded-full inline-block absolute mt-6 transition ease transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-3 opacity-50 " : "opacity-100"
          }`}
        ></span>
      </div>
    </>
  );
};

export default Burgermenu;
