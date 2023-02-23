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
  const [elementAttributes,setElementAttributes] = useState({
    top:0,
    bottom:0
  })
  const [view,setView] = useState(false)
  useEffect(() => {
    if (entry) {
      const top = Math.floor(entry.target.offsetTop) - 105
      const bottom = Math.floor(entry.boundingClientRect.height) + top
      setElementAttributes({
        top: top,
        bottom: bottom
      }) 
      
    }
  }, [entry]);
  useEffect(()=>{
    if(position >= elementAttributes.top && position <= elementAttributes.bottom){
      setView(true)
     
    }else{
      setView(false)
     
      
    }
  },[elementAttributes,position,entry])

  return (
    <div
      ref={ref}
      id={category}
      className="flex-auto bg-red-100  box-border pb-0  relative scroll-mt-28  "
    >
      <h2
        href={hash}
        className={`text-slate-800  capitalize tracking-tight font-[600] mb-4   ${
          child ? "text-lg" : "text-2xl"
        }`}
      >
        {title}
        <p>scroll position: {position}</p>
        <p>position from top:{entry &&  elementAttributes.top}</p>
        <p>el height {entry && elementAttributes.bottom}</p>
      </h2>
      <div className="box-border prose leading-7 prose-slate">{children}</div>
      <p className="text-lg text-blue-500">
        {String(view)}
      </p>
    </div>
  );
};

export default Section;
