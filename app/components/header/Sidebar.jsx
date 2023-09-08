import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BiDrink } from "react-icons/bi";
import { BsInfoSquare, BsCalendarEvent } from "react-icons/bs";
import { CiInstagram } from "react-icons/ci";
import { LiaFacebookSquare } from "react-icons/lia";

const Sidebar = (props) => {
  const { isOpen, status } = props;
  const listItems = [
    {
      id: 0,
      name: "Menu",
      href: "/menu",
      icon: <BiDrink />,
    },
    {
      id: 1,
      name: "La nostra storia",
      href: "/storia",
      icon: <BsInfoSquare />,
    },
    {
      id: 2,
      name: "Prenotazioni",
      href: "/prenotazioni",
      icon: <BsCalendarEvent />,
    },
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="header_navbar_sidebar"
            key="10"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ ease: "easeOut", duration: 0.3, delay: 0.05 }}
          >
            <div
              className={`${
                isOpen ? "header_navbar_sidebar_close-button" : "hidden"
              } `}
              onClick={() => status()}
            >
              <span className=" rotate-45 header_navbar_sidebar_close-button_span"></span>
              <span className="-rotate-45 header_navbar_sidebar_close-button_span"></span>
            </div>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ delay: 0.1 }}
              className="header_navbar_sidebar_ul"
            >
              {listItems.map((item) => {
                return (
                  <li key={item.id} onClick={() => status()}>
                    <Link href={item.href} className="flex items-center gap-8">
                      {item.icon}
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </motion.ul>
            <div className="header_navbar_sidebar_socials-wrapper">
              <Link href="https://www.instagram.com/inpiazzareal?fbclid=IwAR3s_4nw5A2M_wNTpEhTgQqY5T-UJaExnIo7c5PkK-Ja5OnFifUIwB5Jqxk">
                <CiInstagram />
              </Link>
              <Link href="https://www.facebook.com/inpiazzareal">
                <LiaFacebookSquare />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
