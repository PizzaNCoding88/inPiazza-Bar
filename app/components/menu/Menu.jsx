import React from "react";
import Image from "next/image";

const Menu = (props) => {
  const { src } = props;
  return (
    <>
      <picture className="py-4 sm:w-4/5 sm:mx-auto lg:py-0 lg:w-full ">
        <Image src={src} alt="menu" style={{ objectFit: "cover" }} />
      </picture>
    </>
  );
};

export default Menu;
