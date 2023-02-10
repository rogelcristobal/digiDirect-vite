import React from "react";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const Section = ({ title, children, category, child }) => {
  const [sticky, setSticky] = useState(false);
  const { ref, entry } = useInView();
  const parentRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (entry && parentRef) {
        const offset = entry.target.offsetTop;
        if (offset > 24 && offset <= parentRef.current.offsetHeight) {
          setSticky(true)
        }else{setSticky(false)}
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [entry,parentRef]);
  
  return (
    <div ref={parentRef} className="flex-auto  box-border pb-4 pt-6 relative">
      {category && (
        <p
          {...(category && { ref: ref })}
          className={`sticky  top-5 transition-all duration-300 ease-in-out  w-fit z-30 ${sticky?'text-base text-slate-900 font-bold':'text-sm text-blue-500 font-semibold'} leading-[24px] tracking-tight  mb-3 capitalize lg:mb-4  font-plus`}
        >
         {category}
        </p>
      )}

      <h1
        className={` tracking-tight font-bold mb-3 capitalize font-plus ${
          child ? "text-lg" : "text-[1.25rem]"
        }`}
      >
        {title}
      </h1>
      <div className=" lg:max-w-3xl prose prose-slate">{children}</div>
    </div>
  );
};

export default Section;
