import React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import DocsContext from "../context/DocsContext";
import ScrollPositionContext from "../context/ScrollPositionContext";
const Section = ({
  title,
  children,
  category,
  child,
  itemID,
  hash,
  threshold,
}) => {
  const { position } = useContext(ScrollPositionContext);
  const { setState } = useContext(DocsContext);
  const sampleRef = useRef(null);
  const [sample, setSample] = useState(0);

  const { ref, entry } = useInView({
    threshold: threshold,
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
    <>
      <div
        {...(category && { ref: ref })}
        {...(entry && { id: category })}
        className="flex-auto  box-border pb-0  relative scroll-mt-28  "
      >
        {category && (
          <p
            className={`  w-fit  transition-all duration-300 ease-in-out   z-30 text-slate-500/50 text-base  font-bold   leading-[24px] tracking-tight  mb-3  lg:mb-3.5  font-plus`}
          >
            {category}
          </p>
        )}

        <h2
          href={hash}
          className={` tracking-tight font-bold mb-4  font-plus ${
            child ? "text-lg" : "text-[1.4rem]"
          }`}
        >
          {title}
        </h2>
        <div className="box-border lg:max-w-3xl prose  font-[400] leading-[28px] font-inter  text-[16px]">
          {children}
        </div>
      </div>
      {/* <div className="h-[1px] w-full mb-12 bg-slate-200"></div> */}
    </>
  );
};

export default Section;
