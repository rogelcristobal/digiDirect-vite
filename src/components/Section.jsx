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
      const top = Math.floor(ref.current.offsetTop) - 60;
      const bottom = Math.floor(ref.current.getBoundingClientRect().height) + top + 60;
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
      className="flex-auto  box-border pb-0  px-0 w-full   scroll-mt-24  "
    >
      {category &&  (
        <p
          className="text-base leading-[24px]  font-plus tracking-tight font-[600] mb-4 text-[#0098FA]"
        >
          {category}
        </p>
      )}
      <h2
        href={hash} //category
        className={` font-inter text-slate-700 font-[500] capitalize  mb-4 tracking-tight  max-w-2xl
        ${header ? "text-[2rem] " : child ? "text-lg " : " text-[1.35rem]"}`}
      >
        {title}
       
      </h2>
      <div className="box-border font-inter  leading-7 text-[0.925rem] w-full max-w-[45rem] text-slate-800">{children}</div>
       {/* <div className="bg-blue-300/10 text-red-600 z-50 absolute w-full" style={{top:elementAttributes.top,left:0}}>{title} top</div>
      <div className="bg-blue-300/10 text-red-600 z-50 absolute w-full" style={{top:elementAttributes.bottom ,left:0}}>{title} bottom</div> */}
    </div>
  );
};

export default Section;
