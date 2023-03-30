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
      <div className="h-96 w-32"></div>
      {/* content container */}
      <div className="box-border flex-col  flex items-center justify-start  pt-2 px-8 max-w-[60rem] w-full">
        {/* header */}
        <div
          id={state.category}
          className="scroll-mt-28 w-full  relative flex-auto mb-12  box-border"
        >
          <Section
            title={'Product listing'}
            // category={state.category}
            hash={state.category}
            header
          >
            {/* {state.detail} */}
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


       <div className=" w-[22rem] h-[calc(100vh-16rem)]    box-border top-32 mt-32 sticky ">
        <nav className="relative h-full rounded-md pr-[0rem] pl-6 py-2">
          <p className=" text-sm  text-left text-[#0a1c40] mb-3 font-[600] capitalize ">
            On this page
          </p>

          <div className="  pl-4 text-left flex items-start flex-col justify-start  font-inter ">
            {/* <a
              href={`#${state.category}`}
              className={` relative text-[14px] mt-3 capitalize   box-border font-[400] text-left py-2 px-0  flex  font-inter ${
                !state.viewState ? "text-gray-800" : " text-blue-500 "
              }`}
            >
              {state.title}
            </a> */}

            {state.sections.map((item, id) => (
              <>
                {/* {item.category&& <span className="mt-4 mb-2 text-[14px] text-[#7c8494]  font-[400] flex items-center justify-between gap-1 font-inter">{item.category}</span>} */}
                <a
                key={id}
                href={`#${item.title}`}
                className={` py-1 text-[14px] font-[400] text-[#0098FA]  flex items-center justify-between gap-1 font-inter  ${
                  item.child ? "pl-5 ": "mt-2"
                }  w-full  cursor-pointer  ${
                  !item.viewState ? "text-[#7c8494]" : " text-blue-500 font-medium"
                }`}
              >
              {item.title}
              </a>
              </>
            ))}
          </div>
        </nav>
      </div>
    </PageContainers>
  );
};

export default Documentation;
