import React from "react";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const Section = ({ title, children, category, child, id, hash }) => {
  const [sticky, setSticky] = useState(false);
  const { ref, entry } = useInView();
  const parentRef = useRef(null);
 
  const camelCaseAndRemoveSpaces=(value)=>{
    if(value.split(" ").Length === 1){
       console.log(value)
    }else{
      const converted = value.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
          return index == 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, "");

        return converted
    }
  }


   
  
  return (
    <div
      ref={parentRef}
      {...(entry&& { id: category})}   
      className="flex-auto  box-border pb-4 pt-6 relative scroll-mt-20"
    >
      {category && (
        <p
          {...(category && { ref: ref })}
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
      <div className=" lg:max-w-3xl prose prose-slate text-[0.950rem] font-sans font-[500] text-base">
        {children}
      </div>
    </div>
  );
};

export default Section;
