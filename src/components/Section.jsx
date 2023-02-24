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
  const { position } = useContext(ScrollPositionContext); // scroll position
  const { setState, state } = useContext(DocsContext);

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
  const [elementAttributes, setElementAttributes] = useState({
    top: 0,
    bottom: 0,
  });

  useEffect(() => {
    if (entry) {
      const top = Math.floor(entry.target.offsetTop) - 60;
      const bottom = Math.floor(entry.boundingClientRect.height) + top + 60;
      setElementAttributes({
        top: top,
        bottom: bottom,
      });
    }
  }, [entry]);
  useEffect(() => {
    if (
      position >= elementAttributes.top &&
      position <= elementAttributes.bottom
    ) {
      setState((prev) => ({
        ...prev,
        sections: prev.sections.map((item, id) => {
          if (id === itemID) {
            return { ...item, viewState: true };
          }
          return item;
        }),
      }));
    } else {
      setState((prev) => ({
        ...prev,
        sections: prev.sections.map((item, id) => {
          if (id === itemID) {
            return { ...item, viewState: false };
          }
          return item;
        }),
      }));
    }
  }, [elementAttributes, position]);

  return (
    <div
      ref={ref}
      id={category}
      className="flex-auto  medium-box-divider box-border pb-0   scroll-mt-24  "
    >
      <h2
        href={hash}
        className={`text-slate-800  capitalize tracking-tight font-[600] mb-4   ${
          child ? "text-lg" : "text-2xl"
        }`}
      >
        {title}
        {/* <p>scroll position: {position}</p>
        <p>position from top:{entry && elementAttributes.top}</p>
        <p>el height {entry && elementAttributes.bottom}</p> */}
      </h2>
      <div className="box-border prose leading-7 prose-slate">{children}</div>
      
     
    </div>
  );
};

export default Section;
