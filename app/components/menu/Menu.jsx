import React from "react";
import Image from "next/image";
import { useState } from "react";
import MenuModal from "./MenuModal";

const Menu = (props) => {
  const { src } = props;
  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(!isOpen);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <picture className="py-4 sm:w-4/5 sm:mx-auto lg:py-0 lg:w-full ">
        <button onClick={openModal}>
          <Image src={src} alt="menu" style={{ objectFit: "cover" }} />
          {isOpen && <MenuModal src={src} status={closeModal} />}
        </button>
      </picture>
    </>
  );
};

export default Menu;
