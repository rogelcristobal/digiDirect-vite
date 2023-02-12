import React from "react";
import { useContext, useRef,useState,useEffect } from "react";
import DocsContext from "../context/DocsContext";
import Section from "./Section";
import {motion} from 'framer-motion'
const SidebarLayoutPage = () => {
  const { state: textContent } = useContext(DocsContext);
  const ref=useRef(null)
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll=()=>{
      const position = Math.floor(window.scrollY)
      
      if(position > 30){
        setSticky(true)
      }else{setSticky(false)}
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref.current]);
  console.log(sticky)
  return (
    <div className="relative w-full flex items-start   justify-start gap-2 pt-0 box-border">
      {/* sidebar container*/}
      <div className="h-[calc(100vh-5.5rem)]  sticky top-20  pl-5 w-96 overflow-y-auto pt-16 ">
        {/* content */}
        <nav className="relative h-full  px-[1rem]">
          <h5 className="text-slate-900 text-[13px]  text-left font-inter  font-bold capitalize mb-4">
            getting started 
          </h5>
          {/* items */}
          <div className="space-y-2.5 text-slate-700 pl-3 text-left  font-inter">
            <p className="capitalize text-[13px] font-medium  cursor-pointer hover:text-blue-500 ">
              {textContent.title}
            </p>
            {textContent.sections.map((item, id) => (
              <p
                key={id}
                className="capitalize text-[13px] font-medium  cursor-pointer hover:text-blue-500 "
              >
                {item.title}
              </p>
            ))}
          </div>
        </nav>
      </div>
      {/* body */}
      <div className="h-full box-border medium-box-divider w-full py-12 px-12  ">
        {/* heading container */}
        <div className=" max-w-3xl relative flex-auto  mb-12">
          <p className="text-sm leading-[24px]  font-semibold mb-3 capitalize lg:mb-3 text-blue-500">
            {textContent.category}
          </p>
          <h1 className={`inline-block text-2xl sm:text-3xl font-sans font-semibold text-slate-900  capitalize`}>
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
