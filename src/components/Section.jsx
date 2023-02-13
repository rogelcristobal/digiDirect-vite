import React from "react";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const Section = ({ title, children, category, child, id, hash }) => {
  const [sticky, setSticky] = useState(false);
  const { ref, entry } = useInView();
  const parentRef = useRef(null);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (entry && parentRef) {
  //       const offset = entry.target.offsetTop;
  //       if (offset > 24 && offset <= parentRef.current.offsetHeight) {
  //         setSticky(true)
  //       }else{setSticky(false)}
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [entry,parentRef]);

  // hash => camelcase , hash === 1 word return
  const camelCaseAndRemoveSpaces=(value)=>{
    if(value.split(" ").Length === 1){
      return value
    }else{
      const converted = value.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
          return index == 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, "");

        return converted
    }
  }
  // if (hash) {
  //   if (hash.split(" ").length === 1) {
  //     console.log(hash);
  //   } else {
  //     // Convert to camel case
  //     const x = hash
  //       .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
  //         return index == 0 ? word.toLowerCase() : word.toUpperCase();
  //       })
  //       .replace(/\s+/g, "");
  //     console.log(x);
  //   }
  // }

   
  
  return (
    <div
      ref={parentRef}
      className="flex-auto  box-border pb-4 pt-6 relative"
    >
      {category && (
        <p
          animate={{
            x: sticky ? "-135%" : 0,
            transition: {
              duration: 0.3,
            },
          }}
          {...(category && { ref: ref })}
          {...(entry&& { id: camelCaseAndRemoveSpaces(entry.target.innerText)})}
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
