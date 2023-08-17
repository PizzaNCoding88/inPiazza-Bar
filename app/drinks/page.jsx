import React from "react";
import DrinksMenu from "../components/drinksMenu/DrinksMenu";

const page = () => {
  const drinks = [
    {
      id: 1,
      src: "/../public/assets/menu-cocktails.webp",
    },
    {
      id: 2,
      src: "/../public/assets/menu-liquori-champagne.webp",
    },
  ];
  return (
    <>
      <DrinksMenu drinks={drinks} />
    </>
  );
};

export default page;
