import React from "react";
import Image from "next/image";
import { useState } from "react";
import MenuModal from "./MenuModal";
import { AnimatePresence } from "framer-motion";

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
      <picture className="menu-page-pics">
        <button onClick={openModal}>
          <Image src={src} alt="menu" style={{ objectFit: "cover" }} />
          <AnimatePresence>
            {isOpen && <MenuModal src={src} status={closeModal} />}
          </AnimatePresence>
        </button>
      </picture>
    </>
  );
};

export default Menu;
