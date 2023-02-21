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
      className="h-full box-border flex w-full pb-6 pt-10 pl-12 gap-20 scroll-smooth"
    >
      {/* content container */}
      <div className="box-border flex-auto w-full">
        {/* header */}
        <div
          id="introduction"
          className="scroll-mt-28 max-w-3xl relative flex-auto mb-12  box-border"
        >
          <p
            ref={titleViewRef}
            className="text-sm leading-[24px]  font-semibold mb-2 text-[#5138ed]"
          >
            {state.category}
          </p>
          <h1
            className={`inline-block text-2xl sm:text-3xl font-plus font-bold tracking-tight text-slate-900  `}
          >
            {state.title}
          </h1>
          <p className="mt-4 lg:max-w-3xl prose leading-[29px] text-[rgba(60, 60, 67, .92)] font-[400]   font-inter  text-[16px]">
            {state.detail}
          </p>
        </div>

        <div className="h-[1px] w-full mb-12 bg-slate-200"></div>
        {/* content */}
        <div className="box-border ">
          {state.sections.map((item, id) => (
            <Section
              key={id}
              itemID={id}
              title={item.title}
              category={item.category}
              hash={item.category}
              threshold={item.viewThreshold}
            >
              {item.detail}
            </Section>
          ))}
        </div>
      </div>
      {/* page navigation */}
      <div className=" w-[20rem] h-96 box-border top-32 sticky">
        <nav className="relative h-full  px-[0rem]">
          <p className="text-slate-900 text-sm  text-left font-plus  font-bold capitalize mb-4">
            On this page
          </p>
          {/* items */}
          <div className="space-y-3.5 text-slate-700 pl-4 text-left flex items-start flex-col justify-start  font-plus">
            <a
              href="#introduction"
              className={`relative capitalize text-sm font-semibold  cursor-pointer 
            ${
              titleRefEntry &&
              (titleViewState ? "text-[#5138ed]" : "text-slate-500/70")
            } `}
            >
              {state.title}
              <div
                className={`absolute h-full w-[3px] bg-[#5138ed] top-0 -left-4 ${
                  titleViewState ? "visible" : "hidden"
                } rounded-md`}
              ></div>
            </a>
            {state.sections.map((item, id) => (
              <a
                key={id}
                href={`#${item.category}`}
                className={`relative text-sm font-semibold  cursor-pointer ${
                  !item.viewState ? "text-slate-500/70" : " text-[#5138ed]"
                }`}
              >
                {item.title}
                <div
                  className={`absolute h-full w-[3px] bg-[#5138ed] top-0 -left-3 ${
                    item.viewState ? "visible" : "hidden"
                  } rounded-md`}
                ></div>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Documentation;
