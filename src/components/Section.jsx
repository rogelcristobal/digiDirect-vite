import React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import DocsContext from "../context/DocsContext";
import ScrollPositionContext from "../context/ScrollPositionContext";
const Section = ({ title, children, category, child, itemID, hash }) => {
  const { position } = useContext(ScrollPositionContext);
  const { setState } = useContext(DocsContext);
  const sampleRef=useRef(null)
  const [sample, setSample] = useState(0);
    

  const { ref, entry } = useInView({
    threshold: 0.6,
    onChange: (inView) => {
      setState((prev) => ({
        ...prev,
        sections: prev.sections.map((item, id) => {
          if (id === itemID) {
            return { ...item, viewState: inView };
          }
          return item;
        }),
      }));
    },
  });

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

  return (
    <div
    {...(category && { ref: ref })}
      
      {...(entry && { id: category })}
      className="flex-auto  box-border pb-0 pt-6 relative scroll-mt-20  "
    >
      {category && (
        <p
         
          className={`  w-fit  transition-all duration-300 ease-in-out   z-30 text-blue-500 text-base  font-bold   leading-[24px] tracking-tight  mb-3 capitalize lg:mb-4  font-plus`}
        >
          {category}{category&& sample}
        </p>
      )}

      <h1
        href={hash}
        className={` tracking-tight font-bold mb-4 capitalize font-plus ${
          child ? "text-lg" : "text-2xl"
        }`}
      >
        {title}
      </h1>
      <div className=" lg:max-w-3xl prose leading-7 prose-slate font-[500]   font-plus  text-base">
        {children}
      </div>
    </div>
  );
};

export default Section;
