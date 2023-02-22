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
  const { setState, state } = useContext(DocsContext);
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
    <div
      // {...(category && { ref: ref })}
      // {...(entry && { id: category })}
      ref={ref}
      id={category}
      className="flex-auto  box-border pb-0 relative scroll-mt-28  "
    >
      <h2
        href={hash}
        className={`text-slate-800  capitalize tracking-tight font-[600] mb-4   ${
          child ? "text-lg" : "text-2xl"
        }`}
      >
        {title}
      </h2>
      <div className="box-border prose leading-7 prose-slate">{children}</div>
    </div>
  );
};

export default Section;
