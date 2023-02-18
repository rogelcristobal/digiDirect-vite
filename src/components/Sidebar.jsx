import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="h-[calc(100vh-5.5rem)] sticky top-16   pl-2 lg:pl-0 box-border flex justify-start items-start w-[23rem]   pt-12 thin-right-divider overflow-y-scroll">
      {/*sidebar content */}
      <nav className="relative h-full  px-[0rem]">
        <p className="text-slate-900 text-sm  text-left font-plus  font-bold capitalize mb-4">
          getting started
        </p>
        {/* items */}
        <div className="space-y-3.5 text-slate-700 text-left flex items-start flex-col justify-start  font-plus">
          
          <Link to="documentation">
            <a
              // href="#introduction"
              className={` text-sm font-semibold text-slate-900 cursor-pointer `}
            >
              Documentation
            </a>
          </Link>
          <Link to="listing-helper">
            <a
              // href="#introduction"
              className={` text-sm font-semibold text-slate-900 cursor-pointer `}
            >
              Product listing helper
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
