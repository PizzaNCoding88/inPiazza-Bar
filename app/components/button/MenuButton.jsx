import React from "react";
import "./Button.css";
import Link from "next/link";

const MenuButton = ({ text, link, style }) => {
  return (
    <>
      <Link href={link}>
        <button className={`btn btn_${style} link`}>{text}</button>
      </Link>
    </>
  );
};

export default MenuButton;
