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
    
      {/* content container */}
      <div className="box-border  flex-auto w-full  max-w-3xl ">
        {/* header */}
        <div
          id={state.category}
          className="scroll-mt-28  relative flex-auto mb-16  box-border"
        >
          <Section
            title={state.title}
            category={state.category}
            hash={state.category}
            header
          >
            {state.detail}
          </Section>
        </div>

        {/* content */}
        <div className="box-border space-y-14">
          {state.sections.map((item, id) => (
            <Section
              key={id}
              itemID={id}
              title={item.title}
              category={item.category}
              hash={item.category}
              // threshold={item.viewThreshold}
              {...(item.child && { child: true })}
            >
              {item.detail}
            </Section>
          ))}
        </div>
      </div>
      {/* page navigation */}
      <div className=" w-[26rem] pl-4 h-fit py-4 box-border top-28 sticky ">
        <nav className="relative h-full  pr-[1rem]">
          <p className=" text-sm  text-left font-inter  font-[600] capitalize mb-3">
            Get started
          </p>
          <div className="space-y-2 text-slate-700 pl-4 text-left flex items-start flex-col justify-start  font-inter ">
            <Link
              to=""
              className=" py-1 text-[0.85rem] font-[400] hover:text-[#356be5] text-slate-700 flex items-center justify-between gap-1"
            >
              <FiChevronRight className="text-[1rem] 0 " />
              Quick create
            </Link>
            <Link
              to=""
              className=" py-1 text-[0.85rem] font-[400] hover:text-[#356be5] text-slate-700 flex items-center justify-between gap-1"
            >
              <FiChevronRight className="text-[1rem] 0 " />
              Create custom template
              <FiHelpCircle className="text-slate-500/50 ml-2" />
            </Link>
          </div>
        </nav>
      </div>
    </PageContainers>
  );
};

export default Documentation;
