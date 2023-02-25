import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiLayout } from "react-icons/fi";

const DropDown = ({ children, dropDownTitle }) => {
  const [state, setState] = React.useState(true);
  const handleToggle = () => {
    setState(!state);
  };
  const dropDown = {
    hidden: {
      height: 0,
    },
    visible: {
      height: "auto",

      transition: {
        duration: 0.3,
      },
    },
    unMount: {
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <>
      <button
        onClick={handleToggle}
        className={`relative text-[1rem] w-full flex items-center justify-between rounded-md font-[500] py-2 px-0 box-border  font-inter  mb-3`}
      >
        <div className="flex items-center  gap-2.5  justify-between">
          <FiChevronDown />
          <FiLayout
            className={`${state ? "text-blue-500 " : "text-slate-900"}`}
          />
          <p
            className={` text-[0.85rem]  box-border   text-left font-inter capitalize `}
          >
            {dropDownTitle}
          </p>
        </div>
      </button>
      <AnimatePresence>
        {state && (
          <motion.div
            // key="dropdown-item"
            variants={dropDown}
            animate="visible"
            initial="hidden"
            exit="unMount"
            className="w-full  block overflow-hidden pl-6 box-border "
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DropDown;
