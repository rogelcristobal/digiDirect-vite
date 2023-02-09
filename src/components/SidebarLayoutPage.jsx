import React from "react";
import { useContext } from "react";
import DocsContext from "../context/DocsContext";
import Section from "./Section";
const SidebarLayoutPage = () => {
  const {state:textContent} = useContext(DocsContext)
  console.log(textContent)
  return (
    <>
      {/* sidebar */}
      <div className="h-[calc(100vh-5.5rem)] sticky top-24  w-80 px-4 ">
        {/* content */}
        <h5 className="text-slate-900 text-sm tracking-tight text-left py-8 font-semibold capitalize">getting started</h5>
      </div>
      {/* body */}
      <div className="h-full thin-box-divider w-full px-12 py-12">
        {/* heading container */}
        <div className=" max-w-4xl flex-auto thin-box-divider mb-8">
            <p className="text-sm leading-[24px] tracking-tight font-semibold mb-3 capitalize lg:mb-4 text-blue-500">{textContent.category}</p>
            <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight capitalize font-plus">{textContent.title} </h1>
            <p className="mt-4 lg:mt-6 text-lg ">{textContent.detail}</p>
        </div>
        {/* content */}

        {textContent.sections.map((item,id)=>(
          
            <Section key={id} title={item.title}  category={item.category}>{item.detail}</Section>
          
        ))}


      </div>
    </>
  );
};

export default SidebarLayoutPage;
