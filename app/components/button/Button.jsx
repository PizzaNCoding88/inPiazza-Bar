import React from "react";
import "./Button.css";
import Link from "next/link";

const Button = ({ text, link, style }) => {
  return (
    <>
      <button className={`btn btn_${style}`}>
        <Link href={link}>{text}</Link>
      </button>
    </>
  );
};

export default Button;
