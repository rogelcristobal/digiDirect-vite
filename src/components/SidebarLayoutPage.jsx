import React from "react";
import { useContext, useRef, useState, useEffect } from "react";
import DocsContext from "../context/DocsContext";
import Section from "./Section";
import { motion } from "framer-motion";
const SidebarLayoutPage = () => {
  const { state: textContent } = useContext(DocsContext);
  const ref = useRef(null);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = Math.floor(window.scrollY);

      if (position > 30) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref.current]);
  console.log(sticky);
  const parent = {
    hidden: { opacity: 0, rotate: 180 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 2 } },
  };
  const anim = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 4,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="relative container mx-auto flex items-start   justify-start gap-2 pt-0 box-border">
      {/* sidebar container*/}
      <div className="h-[calc(100vh-5.5rem)] thin-box-divider sticky top-20  pl-0 box-border flex justify-center items-start w-[26rem] overflow-y-auto pt-14 ">
        {/* content */}
        <nav className="relative h-full  px-[1rem]">
          <h5 className="text-slate-900 text-sm  text-left font-plus  font-bold capitalize mb-4">
            getting started
            {/* <svg
              className="medium-box-divider "
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                id="SVGRepo_iconCarrier"
                d="M 5.99992 24 H 41.9999"
                stroke="rgb(15, 23, 42)"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 1,
                }}
                id="SVGRepo_iconCarrier_head"
                d="M 30 12 L 42 24 L 30 36"
                stroke="red"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg> */}
          </h5>
          {/* items */}
          <div className="space-y-3.5 text-slate-700 pl-3 text-left  font-plus">
            <p className="capitalize text-sm font-semibold  cursor-pointer hover:text-blue-500 ">
              {textContent.title}
            </p>
            {textContent.sections.map((item, id) => (
              <p
                key={id}
                className="capitalize text-sm font-semibold  cursor-pointer hover:text-blue-500 "
              >
                {item.title}
              </p>
            ))}
          </div>
        </nav>
      </div>
      {/* body */}
      <div className="h-full box-border thin-box-divider w-full py-14 px-12  ">
        {/* heading container */}
        <div className=" max-w-3xl relative flex-auto  mb-12">
          <p className="text-sm leading-[24px]  font-semibold mb-3 capitalize lg:mb-3 text-blue-500">
            {textContent.category}
          </p>
          <h1
            className={`inline-block text-2xl sm:text-3xl font-plus font-bold tracking-tight text-slate-900  capitalize`}
          >
            {textContent.title}
          </h1>
          <p className="mt-4 lg:mt-6 text-lg ">{textContent.detail}</p>
        </div>
        {/* content */}

        {textContent.sections.map((item, id) => (
          <Section
            key={id}
            id={item.id}
            title={item.title}
            category={item.category}
            hash={item.category}
          >
            {item.detail}
          </Section>
        ))}
      </div>
    </div>
  );
};

export default SidebarLayoutPage;
