import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const DropDown = ({ children, dropDownTitle, icon, initialState }) => {
  const [state, setState] = React.useState(initialState ? true : false);
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
      className={`relative text-[1rem] w-full  flex-col flex items-start justify-center rounded-md font-[500] py-2.5  px-0 box-border  font-inter  mb-1`}
    >
      <div className="flex items-center  gap-2.5  mb-0 justify-between">
        <motion.div
          initial={{
            rotate: -90,
          }}
          animate={{
            rotate: state ? 0 : -90,
          }}
        >
          <FiChevronDown />
        </motion.div>
        <div
          className={`h-fit w-fit  ${
            state ? "text-blue-500 " : "text-slate-900"
          }`}
        >
          {icon}
        </div>
        <p
          className={` text-[0.85rem] font-[600] box-border   text-left font-inter capitalize `}
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
            onClick={(event)=>event.stopPropagation()}
            className="w-full  block overflow-hidden pl-6 box-border  mb-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DropDown;
