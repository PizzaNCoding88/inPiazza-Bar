import React from "react";
import Image from "next/image";

const Menu = (props) => {
  const { src } = props;
  return (
    <>
      <picture className="py-4 sm:w-4/5 sm:mx-auto">
        <Image src={src} alt="menu" objectFit="cover" />
      </picture>
    </>
  );
};

export default Menu;
