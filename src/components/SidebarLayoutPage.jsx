import React from "react";
import { useContext, useRef, useState, useEffect } from "react";
import DocsContext from "../context/DocsContext";
import Section from "./Section";
const SidebarLayoutPage = () => {
  const {state} = useContext(DocsContext);
  // const ref = useRef(null);
  // const [ setSticky] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const position = Math.floor(window.scrollY);

  //     if (position > 30) {
  //       setSticky(true);
  //     } else {
  //       setSticky(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [ref.current]);
 
  
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


  
  return (
    <div className="relative container mx-auto flex items-start   justify-start gap-2 pt-0 box-border">
      {/* sidebar container*/}
      <div className="h-[calc(100vh-5.5rem)] thin-box-divider sticky top-20  pl-0 box-border flex justify-start items-start w-[24rem] overflow-y-auto pt-14 ">
        {/* content */}
        <nav className="relative h-full  px-[1rem]">
          <p className="text-slate-900 text-sm  text-left font-plus  font-bold capitalize mb-4">
            getting started
          </p>
          {/* items */}
          <div className="space-y-3.5 text-slate-700 pl-3 text-left flex items-start flex-col justify-start  font-plus">
            <a href="#introduction" className="capitalize text-sm font-semibold  cursor-pointer  ">
              {state.title}
            </a>
            {state.sections.map((item, id) => (
              <a
                key={id}
                href={`#${item.category}`}
                className={`capitalize text-sm font-semibold  cursor-pointer ${!item.viewState? 'text-slate-900': ' text-blue-500'}`}
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
        <div id="introduction" className="scroll-mt-28 max-w-3xl relative flex-auto  mb-14">
          <p className="text-sm leading-[24px]  font-semibold mb-3 capitalize lg:mb-3 text-blue-500">
            {state.category}
          </p>
          <h1
            className={`inline-block text-2xl sm:text-3xl font-plus font-bold tracking-tight text-slate-900  capitalize`}
          >
            {state.title}
          </h1>
          <p className="mt-4 lg:mt-6 text-lg ">{state.detail}</p>
        </div>
        {/* content */}

        {state.sections.map((item, id) => (
          <Section
            key={id}
            itemID={id}
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
