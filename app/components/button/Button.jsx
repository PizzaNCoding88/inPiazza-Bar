import React from "react";
import "./Button.css";
import Link from "next/link";

const Button = ({ text, link, style, linkstyle }) => {
  return (
    <>
      <Link href={link} className={`${linkstyle}`}>
        <button className={`btn btn_${style}`}>{text}</button>
      </Link>
    </>
  );
};

export default Button;
