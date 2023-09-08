import React from "react";
import Image from "next/image";

const Menu = (props) => {
  const { src } = props;
  return (
    <>
      <picture className="menu-page-pics">
        <Image src={src} alt="menu" style={{ objectFit: "cover" }} />
      </picture>
    </>
  );
};

export default Menu;
