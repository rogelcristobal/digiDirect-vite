import React from "react";
import { useContext } from "react";
import DocsContext from "../context/DocsContext";
import Section from "./Section";
const SidebarLayoutPage = () => {
  const { state: textContent } = useContext(DocsContext);
  console.log(textContent);
  return (
    <>
      {/* sidebar */}
      <div className="h-[calc(100vh-5.5rem)] sticky top-24 thin-box-divider w-96 medium-box-divider pt-6">
        {/* content */}
        <h5 className="text-slate-900 text-sm tracking-tight text-left  font-bold capitalize mb-6">
          getting started
        </h5>
        <div className="space-y-2">
          <p className="capitalize text-sm font-medium  cursor-pointer hover:text-blue-500 ">
            {textContent.title}
          </p>
          {textContent.sections.map((item, id) => (
            <p
              key={id}
              className="capitalize text-sm font-medium  cursor-pointer hover:text-blue-500 "
            >
              {item.title}
            </p>
          ))}
        </div>
      </div>
      {/* body */}
      <div className="h-full thin-box-divider w-full p-6 ">
        {/* heading container */}
        <div className=" max-w-4xl flex-auto thin-box-divider mb-12">
          <p className="text-sm leading-[24px] tracking-tight font-semibold mb-3 capitalize lg:mb-4 text-blue-500">
            {textContent.category}
          </p>
          <h1 className="inline-block text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight capitalize">
            {textContent.title}{" "}
          </h1>
          <p className="mt-4 lg:mt-6 text-lg ">{textContent.detail}</p>
        </div>
        {/* content */}

        {textContent.sections.map((item, id) => (
          <Section key={id} title={item.title} category={item.category}>
            {item.detail}
          </Section>
        ))}
      </div>
    </>
  );
};

export default SidebarLayoutPage;
