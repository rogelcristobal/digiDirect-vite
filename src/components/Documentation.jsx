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
      <div className="box-border flex-col  flex items-center justify-start  pt-6 mx-auto max-w-full w-full">
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
      {/* page navigation */}
      <div className=" w-[23rem] rounded-md   h-fit  box-border top-32 sticky ">
        {/* other page nav */}

        {/* on page links */}
        <nav className="relative h-full rounded-md  pr-[1rem] pl-6 py-2">
          <p className=" text-sm  text-left font-inter  font-[600] capitalize mb-3">
            On this page
          </p>
          <div className="space-y-1.5 text-slate-700 pl-4 text-left flex items-start flex-col justify-start  font-inter ">
            <Link
              to=""
              className=" py-1 text-[0.85rem] font-[500] text-[#0098FA]  flex items-center justify-between gap-1"
            >
              Overview
            </Link>
            <Link
              to=""
              className=" py-1 text-[0.85rem] font-[400] hover:text-[#0098FA] text-slate-700 flex items-center justify-between gap-1"
            >
              Included in the box
            </Link>
            <Link
              to=""
              className=" py-1 text-[0.85rem] font-[400] hover:text-[#0098FA] text-slate-700 flex items-center justify-between gap-1"
            >
              Product description
            </Link>
            <Link
              to=""
              className=" py-1 text-[0.85rem] font-[400] hover:text-[#0098FA] text-slate-700 flex items-center justify-between gap-1"
            >
              Product Specification
            </Link>
            <Link
              to=""
              className=" py-1 text-[0.85rem] font-[400] hover:text-[#0098FA] text-slate-700 flex items-center justify-between gap-1"
            >
              Search Engine Optimization
            </Link>
          </div>
        </nav>

        <nav className="relative h-full rounded-md mt-8 pr-[1rem] pl-6 py-2 ">
          <p className=" text-sm  text-left font-inter  font-[600] capitalize mb-3">
            Get started
          </p>
          <div className="space-y-1.5 text-slate-700 pl-0 text-left flex items-start flex-col justify-start  font-inter ">
            <Link
              to=""
              className=" py-1 text-[0.85rem] font-[400] hover:text-[#0098FA] text-slate-700 flex items-center justify-between gap-1"
            >
              Quick create
            </Link>
            <Link
              to=""
              className=" py-1 text-[0.85rem] font-[400] hover:text-[#0098FA] text-slate-700 flex items-center justify-between gap-1"
            >
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
