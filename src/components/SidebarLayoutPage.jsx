import React from "react";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import DocsContext from "../context/DocsContext";
import Section from "./Section";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage";
const SidebarLayoutPage = () => {
  const { state } = useContext(DocsContext);
  const [titleViewRef, titleViewState, titleRefEntry] = useInView({
    threshold: 1,
  });
  const targetRef = React.useRef(null);

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
    <div className="relative w-full px-8 mx-auto flex items-start   justify-start gap-2   box-border">
      <Sidebar />
      {/* body */}
      {/* documentation */}

      <Routes>
        <Route
          path="documentation"
          // index
          element={
            <div
              ref={targetRef}
              className="h-full box-border flex w-full pb-6 pt-16 pl-12 gap-20 scroll-smooth	 "
            >
              {/* content container */}
              <div className="box-border flex-auto">
                {/* header */}
                <div
                  id="introduction"
                  className="scroll-mt-28 max-w-3xl relative flex-auto  mb-20  "
                >
                  <p
                    ref={titleViewRef}
                    className="text-sm leading-[24px]  font-semibold mb-3  lg:mb-3 text-blue-500"
                  >
                    {state.category}
                  </p>
                  <h1
                    className={`inline-block text-2xl sm:text-3xl font-plus font-bold tracking-tight text-slate-900  `}
                  >
                    {state.title}
                  </h1>
                  <p className="mt-4 lg:max-w-3xl prose leading-[29px] prose-slate font-[500]   font-plus  text-[16px]">
                    {state.detail}
                  </p>
                </div>

                {/* content */}
                <div className="box-border space-y-4">
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
              <div className=" w-[17rem] h-96 box-border top-32 sticky">
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
              (titleViewState ? "text-blue-500" : "text-slate-500/70")
            } `}
                    >
                      {state.title}
                      <div
                        className={`absolute h-full w-[3px] bg-blue-500 top-0 -left-4 ${
                          titleViewState ? "visible" : "hidden"
                        } rounded-md`}
                      ></div>
                    </a>
                    {state.sections.map((item, id) => (
                      <a
                        key={id}
                        href={`#${item.category}`}
                        className={`relative text-sm font-semibold  cursor-pointer ${
                          !item.viewState
                            ? "text-slate-500/70"
                            : " text-blue-500"
                        }`}
                      >
                        {item.title}
                        <div
                          className={`absolute h-full w-[3px] bg-blue-500 top-0 -left-4 ${
                            item.viewState ? "visible" : "hidden"
                          } rounded-md`}
                        ></div>
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          }
        ></Route>
        <Route path="listing-helper" element={
          <div> listing helper</div>
        }>

        </Route>
        <Route path="*" element={ <ErrorPage />}/>
      </Routes>

      {/* <Route path="/other" element={
          <div>get started</div>

        }></Route> */}
    </div>
  );
};

export default SidebarLayoutPage;
