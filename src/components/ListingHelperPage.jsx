import React, { useEffect } from "react";

const ListingHelperPage = () => {
  return (
    <div className="h-full box-border  flex w-full pb-6 pt-10  gap-20 scroll-smooth">
      <div className="box-border  flex-auto w-full  h-full">
        <div
          id="introduction"
          className="scroll-mt-28 w-full medium-box-divider flex-auto mb-12  px-12 py-4 "
        >
          <p
            // ref={titleViewRef}
            className="text-sm leading-[24px]  font-semibold   mb-2 text-slate-500/50"
          >
            {/* {state.category} */}
            Tools
          </p>
          <h1
            className={`inline-block text-3xl font-plus font-bold tracking-tight text-slate-900  `}
          >
            {/* {state.title} */}
            Lorem, ipsum.
          </h1>
          {/* <p className="mt-4 lg:max-w-3xl prose leading-[29px] text-[rgba(60, 60, 67, .92)] font-[400]   font-inter  text-[16px]">
            
          </p> */}
        </div>
        {/* <div className="h-[1px] w-full mb-12 bg-slate-200"></div> */}
        <div className="h-[200rem]"></div>
      </div>
    </div>
  );
};

export default ListingHelperPage;
