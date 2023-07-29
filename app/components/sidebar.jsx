import React from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-primary absolute top-0 right-0 bottom-0 w-1/2"
            key="10"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ ease: "easeOut", duration: 0.3 }}
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
