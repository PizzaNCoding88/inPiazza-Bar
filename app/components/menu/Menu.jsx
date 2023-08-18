import React from "react";
import Image from "next/image";

const Menu = (props) => {
  const { src } = props;
  return (
    <>
      <picture className="mx-auto py-4">
        <Image src={src} alt="menu" objectFit="cover" />
      </picture>
    </>
  );
};

export default Menu;
