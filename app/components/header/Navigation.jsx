import React from "react";
import Link from "next/link";

const Navigation = () => {
  const listItems = [
    {
      id: 0,
      name: "Menu",
      href: "/menu",
    },
    {
      id: 1,
      name: "La nostra storia",
      href: "/storia",
    },
    {
      id: 2,
      name: "Prenotazioni",
      href: "/prenotazioni",
    },
  ];
  return (
    <>
      <ul className="md:flex gap-10 text-xl font-antic text-form hidden lg:text-2xl">
        {listItems.map((li) => {
          return (
            <Link key={li.id} href={li.href}>
              <li>{li.name}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Navigation;
