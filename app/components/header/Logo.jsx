import React from "react";
import logo from "../../../public/assets/logo.webp";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <div className="h-12 w-12 relative">
        <Link href="/" className=" cursor-pointer">
          <Image
            src={logo}
            alt="logo"
            fill="true"
            className="w-full object-contain rounded-full"
          ></Image>
        </Link>
      </div>
    </>
  );
};

export default Logo;
