import React from "react";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import DocsContext from "../context/DocsContext";
import Section from "./Section";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage";
const Documentation = () => {
  const { state } = useContext(DocsContext);
  const [titleViewRef, titleViewState, titleRefEntry] = useInView({
    threshold: 1,
  });

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
    <div
      className="h-full box-border flex w-full pb-6 pt-12  justify-start  pl-16  items-start scroll-smooth"
    >
      {/* content container */}
      <div className="box-border  flex-auto w-full  max-w-3xl">
        {/* header */}
        <div
          id="introduction"
          className="scroll-mt-28  relative flex-auto mb-16  box-border"
        >
          <p
            ref={titleViewRef}
            className="text-sm leading-[24px] font-inter font-medium mb-2 text-[#5138ed]"
          >
            {state.category}
          </p>
          <h1
            className={`inline-block text-3xl  font-inter font-[600] tracking-tigher text-slate-900  `}
          >
            {state.title}
          </h1>
          <p className="mt-4  prose leading-7 prose-slate   ">
            {state.detail}
          </p>
        </div>

        {/* <div className="h-[1px] w-full mb-12 bg-slate-200"></div> */}
        {/* content */}
        <div className=" space-y-14">
          {state.sections.map((item, id) => (
            <Section
              key={id}
              itemID={id}
              title={item.title}
              category={item.category}
              hash={item.category}
              threshold={item.viewThreshold}
              {...(item.child&& {child: true})}
            >
              {item.detail}
            </Section>
          ))}
        </div>
      </div>
      {/* page navigation */}
      {/* <div className=" w-[18rem]  h-fit  py-4 box-border top-28 sticky">
        <nav className="relative h-full  px-[0rem]">
          <p className="text-slate-900 text-sm  text-left font-inter  font-[600] capitalize mb-4">
            On this page
          </p>
          <div className="space-y-2 text-slate-700 pl-4 text-left flex items-start flex-col justify-start  font-inter">
           
            {state.sections.map((item, id) => (
              <a
                key={id}
                href={`#${item.category}`}
                className={`relative text-sm font-medium py-1 cursor-pointer ${
                  !item.viewState ? "text-slate-500/70" : " text-slate-900"
                }`}
              >
                {item.title}
                <div
                  className={`absolute h-full w-[3px]  bg-slate-900 top-0 -left-3 ${
                    item.viewState ? "visible" : "invisible"
                  } rounded-md`}
                ></div>
              </a>
            ))}
          </div>
        </nav>
      </div> */}
    </div>
  );
};

export default Documentation;
