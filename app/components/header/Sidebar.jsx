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
      href: "/",
    },
    {
      id: 1,
      name: "Drinks",
      href: "/",
    },
    {
      id: 2,
      name: "La nostra storia",
      href: "/",
    },
    {
      id: 3,
      name: "Prenotazioni",
      href: "/",
    },
  ];

  const liArr = Object.values(listItems);
  const liArrLenght = liArr.length;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-primary fixed top-0 right-0 bottom-0 w-3/5 flex justify-center items-center z-30"
            key="10"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ ease: "easeOut", duration: 0.3, delay: 0.05 }}
          >
            <div
              className={`${
                isOpen ? "" : "hidden"
              } h-6 w-6 absolute top-5 left-5`}
              onClick={() => status()}
            >
              <span className="w-full h-1 rotate-45 translate-y-4 bg-white absolute"></span>
              <span className="w-full h-1 -rotate-45 translate-y-4 bg-white absolute"></span>
            </div>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ delay: 0.1 }}
              className=" font-antic flex flex-col gap-16 text-center text-lg "
            >
              {listItems.map((item) => {
                return (
                  <li key={item.id}>
                    {item.id === liArrLenght - 1 ? (
                      <Button text="Prenotazioni" link="/" style="sidebar" />
                    ) : (
                      <Link
                        href={item.href}
                        className={
                          item.name == "Prenotazioni"
                            ? " bg-secondary px-6 py-3 rounded-tr-[0.2rem] rounded-bl-[0.2rem] rounded-tl-2xl rounded-br-2xl"
                            : "null"
                        }
                      >
                        {item.name}
                      </Link>
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
