import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Button from "../button/Button";

const Sidebar = (props) => {
  const { isOpen, status } = props;
  const listItems = [
    {
      id: 0,
      name: "Food",
      href: "/food",
    },
    {
      id: 1,
      name: "Drinks",
      href: "/",
    },
    {
      id: 2,
      name: "La nostra storia",
      href: "/storia",
    },
    {
      id: 3,
      name: "Prenotazioni",
      href: "/prenotazioni",
    },
  ];

  const liArrLenght = Object.values(listItems).length;

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
                    {item.id === liArrLenght - 1 ? (
                      <Button
                        text="Prenotazioni"
                        link="/prenotazioni"
                        style="sidebar"
                      />
                    ) : (
                      <Link href={item.href}>{item.name}</Link>
                    )}
                  </li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
