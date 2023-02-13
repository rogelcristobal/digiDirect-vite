import React from "react";
import { useContext, useRef, useState, useEffect } from "react";
import DocsContext from "../context/DocsContext";
import Section from "./Section";
import {useNavigate} from 'react-router-dom'
const SidebarLayoutPage = () => {
  const { state: textContent } = useContext(DocsContext);
  const ref = useRef(null);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = Math.floor(window.scrollY);

      if (position > 30) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref.current]);
 
  const [targetId, setTargetId] = useState(null);
  
  const targetRef = React.useRef(null);
 
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

  useEffect(()=>{
    if(targetRef.current){
      console.log(targetRef.current)
    }
  },[targetRef.current])
  
  return (
    <div className="relative container mx-auto flex items-start   justify-start gap-2 pt-0 box-border">
      {/* sidebar container*/}
      <div className="h-[calc(100vh-5.5rem)] thin-box-divider sticky top-20  pl-0 box-border flex justify-center items-start w-[26rem] overflow-y-auto pt-14 ">
        {/* content */}
        <nav className="relative h-full  px-[1rem]">
          <p className="text-slate-900 text-sm  text-left font-plus  font-bold capitalize mb-4">
            getting started
          </p>
          {/* items */}
          <div className="space-y-3.5 text-slate-700 pl-3 text-left flex items-start flex-col justify-start  font-plus">
            <a href="#introduction" className="capitalize text-sm font-semibold  cursor-pointer hover:text-blue-500 ">
              {textContent.title}
            </a>
            {textContent.sections.map((item, id) => (
              <a
                key={id}
                href={`#${item.category}`}
                className="capitalize text-sm font-semibold  cursor-pointer hover:text-blue-500 "
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
      {/* body */}
      <div ref={targetRef} className="h-full box-border thin-box-divider w-full py-14 px-12  ">
        {/* heading container */}
        <div id="introduction" className="scroll-mt-28 max-w-3xl relative flex-auto  mb-12">
          <p className="text-sm leading-[24px]  font-semibold mb-3 capitalize lg:mb-3 text-blue-500">
            {textContent.category}
          </p>
          <h1
            className={`inline-block text-2xl sm:text-3xl font-plus font-bold tracking-tight text-slate-900  capitalize`}
          >
            {textContent.title}
          </h1>
          <p className="mt-4 lg:mt-6 text-lg ">{textContent.detail}</p>
        </div>
        {/* content */}

        {textContent.sections.map((item, id) => (
          <Section
            key={id}
            id={item.id}
            title={item.title}
            category={item.category}
            hash={item.category}
          >
            {item.detail}
          </Section>
        ))}
      </div>
    </div>
  );
};

export default SidebarLayoutPage;
