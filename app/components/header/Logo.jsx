import React from "react";
import logo from "../../../public/assets/logo.webp";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <div className="header_wrapper_logo">
        <Link href="/" className=" cursor-pointer">
          <Image
            src={logo}
            alt="logo"
            className="header_wrapper_logo_image"
          ></Image>
        </Link>
      </div>
    </>
  );
};

export default Logo;
