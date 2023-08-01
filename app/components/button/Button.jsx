import React from "react";
import "./Button.css";
import Link from "next/link";

const Button = ({ text, link, style }) => {
  return (
    <>
      <Link href={link}>
        <button className={`btn btn_${style}`}>{text}</button>
      </Link>
    </>
  );
};

export default Button;
