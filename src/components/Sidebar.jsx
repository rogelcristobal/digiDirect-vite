import React from "react";
import NavigationLink from "./NavigationLink";
const Sidebar = () => {
  return (
    <div className="h-[calc(100vh-5.5rem)] sticky top-16   pl-2 lg:pl-0 box-border flex justify-start items-start w-[23rem]   pt-12 thin-right-divider ">
      {/*sidebar content */}
      <nav className="relative h-full  px-[0rem]">
        <p className=" text-sm  text-left font-inter  font-bold capitalize mb-4">
          Guides
        </p>
        {/* items */}
        <div className="space-y-3.5  text-left flex items-start flex-col justify-start  font-inter">
          <NavigationLink title="Documentation" path='documentation'></NavigationLink>
          <NavigationLink title="Product listing helper" path='listing-helper'></NavigationLink>
          
         
        </div>
      
      </nav>
    </div>
  );
};

export default Sidebar;
