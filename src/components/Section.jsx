import React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import DocsContext from "../context/DocsContext";
import ScrollPositionContext from "../context/ScrollPositionContext";
const Section = ({
  title,
  children,
  category,
  child,
  itemID,
  hash,
  
  header,
}) => {
  const { position } = useContext(ScrollPositionContext); // scroll position
  const { setState } = useContext(DocsContext);
  const ref= useRef(null)
 
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
  // state of element height and offsetTop
  const [elementAttributes, setElementAttributes] = useState({
    top: 0,
    bottom: 0,
  });

  useEffect(() => {
    // whenever the ref mounted
    if (ref.current) {
      const top = Math.floor(ref.current.offsetTop) - 90;
      const bottom = Math.floor(ref.current.getBoundingClientRect().height) + top + 100;
      setElementAttributes({
        top: top,
        bottom: bottom,
      });
    }
  }, [ref.current]);
  useEffect(() => {
    if(!header){
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
    }else{
      if (
        position >= elementAttributes.top &&
        position <= elementAttributes.bottom
      ) {
        setState((prev) => ({
          ...prev,
          viewState: true
        }));
      } else {
         setState((prev) => ({
          ...prev,
          viewState: false
        }));
      }
    }
  }, [elementAttributes, position]);
  
  return (
    <div
      ref={ref}
      id={title}
      
      className="flex-auto  box-border pb-0   scroll-mt-24  "
    >
      {category && (
        <p
          className="text-sm leading-[24px] capitalize font-plus font-[600] mb-2 text-[#356be5]"
        >
          {category}
        </p>
      )}
      <h2
        href={hash} //category
        className={`text-slate-800  capitalize tracking-tight font-[600] mb-4   
        ${header ? "text-3xl" : child ? "text-lg" : "text-2xl"}`}
      >
        {title}
      </h2>
      <div className="box-border prose leading-7  prose-slate">{children}</div>
      
    </div>
  );
};

export default Section;
