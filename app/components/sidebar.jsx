import React from "react";
import Link from "next/link";
import { list } from "postcss";

const Sidebar = (props) => {
  const { isOpen, status } = props;
  const listItems = [
    {
      id: 0,
      name: "Food",
      href: "/",
    },
    {
      id: 1,
      name: "Drinks",
      href: "/",
    },
    {
      id: 2,
      name: "La nostra storia",
      href: "/",
    },
    {
      id: 3,
      name: "Prenotazioni",
      href: "/",
    },
  ];

  return (
    <>
      <div
        className={`transition-all duration-300 delay-75 flex justify-center items-center ${
          isOpen
            ? "absolute top-0 right-0 bottom-0 w-3/5 bg-primary"
            : "absolute w-0"
        }`}
      >
        <div
          className={`${isOpen ? "" : "hidden"} h-6 w-6 absolute top-5 left-5`}
          onClick={() => status()}
        >
          <span className="w-full h-1 rotate-45 translate-y-4 bg-white absolute"></span>
          <span className="w-full h-1 -rotate-45 translate-y-4 bg-white absolute"></span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
