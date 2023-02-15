import React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import DocsContext from "../context/DocsContext";
const Section = ({ title, children, category, child, itemID, hash }) => {
  const [option, setOption] = useState({
    threshold:0,
    rootMargin:null
  });
  const { ref, entry, inView } = useInView({
    threshold: 0.3,
  });
  const { setState } = useContext(DocsContext);
  // text? 1 word=> return text: camel-case
  const camelCaseAndRemoveSpaces = (value) => {
    if (value.split(" ").Length === 1) {
      console.log(value);
    } else {
      const converted = value
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
          return index == 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, "");

      return converted;
    }
  };
  // [inView] state.viewState = inView value
  useEffect(() => {
    setState((prev) => ({
      ...prev,
      sections: prev.sections.map((item, id) => {
        if (id === itemID) {
          return { ...item, viewState: inView };
        }
        return item;
      }),
    }));
  }, [inView]);

  useEffect(() => {
    if (entry) {
      console.log(title,Math.floor(entry.target.getBoundingClientRect().top))
    }
  }, [entry]);
  return (
    <div
      {...(category && { ref: ref })}
      {...(entry && { id: category })}
      className="flex-auto  box-border pb-0 pt-0 relative scroll-mt-20 medium-box-divider "
    >
      {category && (
        <p
          className={` thin-box-divider w-fit  transition-all duration-300 ease-in-out   z-30 text-blue-500 text-base  font-bold   leading-[24px] tracking-tight  mb-3 capitalize lg:mb-3  font-plus`}
        >
          {category}
        </p>
      )}

      <h1
        href={hash}
        className={` tracking-tight font-bold mb-3 capitalize font-plus ${
          child ? "text-lg" : "text-[1.40rem]"
        }`}
      >
        {title}
      </h1>
      <div className=" lg:max-w-3xl prose leading-7 prose-slate font-[500]  text-[0.950rem] font-plus  text-base">
        {children}
      </div>
    </div>
  );
};

export default Section;
