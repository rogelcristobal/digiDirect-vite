import React from "react";
import { useState, useEffect, useRef } from "react";
const Section = ({ title, children, category, child }) => {
  const [sticky, setSticky] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      window.onscroll = function () {
        if (window.pageYOffset > ref.current.offsetTop) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      };
    }
  }, [ref.current]);
  return (
    <div className="flex-auto  box-border pb-4 pt-6 relative">
      {category && (
        <p
          ref={category ? ref : null}
          className={`sticky  top-5 transition-all duration-300 ease-in-out  w-fit z-30 text-sm leading-[24px] tracking-tight font-semibold mb-3 capitalize lg:mb-4 text-blue-500 `}
        >
          
          {title}
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
