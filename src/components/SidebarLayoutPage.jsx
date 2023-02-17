import React from "react";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import DocsContext from "../context/DocsContext";
import Section from "./Section";
const SidebarLayoutPage = () => {
  const { state } = useContext(DocsContext);
  const [titleViewRef, titleViewState, titleRefEntry] = useInView({
    threshold: 1,
  });
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
      {/* sidebar container*/}
      <div className="h-[calc(100vh-5.5rem)] sticky top-16   pl-2 lg:pl-0 box-border flex justify-start items-start w-[23rem]   pt-12 thin-right-divider overflow-y-scroll">
        {/* content */}
        <nav className="relative h-full  px-[0rem]">
          <p className="text-slate-900 text-sm  text-left font-plus  font-bold capitalize mb-4">
            getting started
          </p>
          {/* items */}
          <div className="space-y-3.5 text-slate-700 pl-4 text-left flex items-start flex-col justify-start  font-plus">
            <a
              href="#introduction"
              className={`capitalize text-sm font-semibold  cursor-pointer `}
            >
              Documentation
            </a>
          </div>
        </nav>
      </div>

      {/* body */}
      <div
        ref={targetRef}
        className="h-full box-border flex w-full pb-6 pt-16 pl-12 gap-20 scroll-smooth	 "
      >
        {/* heading container */}
        <div className="box-border flex-auto">
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
                <div className={`absolute h-full w-[3px] bg-blue-500 top-0 -left-4 ${titleViewState?'visible':'hidden'} rounded-md`}></div>

              </a>
              {state.sections.map((item, id) => (
                <a
                  key={id}
                  href={`#${item.category}`}
                  className={`relative text-sm font-semibold  cursor-pointer ${
                    !item.viewState ? "text-slate-500/70" : " text-blue-500"
                  }`}
                >
                  {item.title}
                  <div className={`absolute h-full w-[3px] bg-blue-500 top-0 -left-4 ${item.viewState?'visible':'hidden'} rounded-md`}></div>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SidebarLayoutPage;
