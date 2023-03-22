import React from "react";
import { useContext } from "react";
import DocsContext from "../context/DocsContext";
import Section from "./Section";
import { Link } from "react-router-dom";
import { FiChevronRight, FiHelpCircle } from "react-icons/fi";
import PageContainers from "./PageContainers";
const Documentation = () => {
  const { state } = useContext(DocsContext);

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

  return (
    <PageContainers>
      {/* page navigation */}
      <div className=" w-[20rem] h-[calc(100vh-16rem)]   box-border top-28 sticky ">
        {/* other page nav */}

        {/* on page links */}
        <nav className="relative h-full rounded-md pr-[0rem] pl-6 py-2">
          <p className=" text-sm  text-left   font-[600] capitalize ">
            On this page
          </p>

          <div className=" text-slate-700 pl-0 text-left flex items-start flex-col justify-start  font-inter ">
            <a
              href={`#${state.category}`}
              className={` relative text-[0.825rem] mt-2 capitalize   box-border font-[400] text-left py-2 px-0  flex  font-inter ${
                !state.viewState ? "text-gray-900" : " text-blue-500 "
              }`}
            >
              {state.title}
            </a>

            {state.sections.map((item, id) => (
              <a
                key={id}
                href={`#${item.title}`}
                className={` py-1.5 text-[0.825rem] font-[400] text-[#0098FA]  flex items-center justify-between gap-1  ${
                  item.child && "pl-4"
                }  w-full  cursor-pointer  ${
                  !item.viewState ? "text-gray-700" : " text-blue-500 "
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
      {/* content container */}
      <div className="box-border flex-col  flex items-center justify-start  pt-2 px-8 max-w-full w-full">
        {/* header */}
        <div
          id={state.category}
          className="scroll-mt-28 w-full  relative flex-auto mb-16  box-border"
        >
          <Section
            title={state.title}
            // category={state.category}
            hash={state.category}
            header
          >
            {state.detail}
          </Section>
        </div>

        {/* content */}
        <div className="box-border   space-y-16 flex flex-col items-center justify-start w-full pb-72">
          {state.sections.map((item, id) => (
            <Section
              key={id}
              itemID={id}
              title={item.title}
              hash={item.category}
              category={item.category}
              {...(item.child && { child: true })}
            >
              {item.detail}
            </Section>
          ))}
        </div>
      </div>
    </PageContainers>
  );
};

export default Documentation;
