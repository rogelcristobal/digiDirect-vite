import React from "react";
import NavigationLink from "./NavigationLink";
import {FiBook,FiBox} from 'react-icons/fi'
const Sidebar = () => {
  return (
    <div className="h-[calc(100vh-5.5rem)] sticky top-16     lg:px-6 box-border flex justify-start items-start w-[23rem] overflow-y-auto  pt-12 thin-right-divider ">
      {/*sidebar content */}
      <nav className="relative h-full w-full px-[0rem]">
        <p className=" text-sm  text-left font-inter  font-bold capitalize mb-4">
          Guides
        </p>
        {/* items */}
        <div className="  h-full w-full text-left flex items-center flex-col justify-start  font-inter space-y-4">
          <div className="w-full box-border space-y-1.5">
            {[{title:'Documentation',pathname:'documentation',icon:<FiBook/>},{title:'Product listing helper',pathname:'listing-helper',icon:<FiBox />}].map((item,id)=>(
             <NavigationLink key={id} icon={item?.icon} title={item.title} path={item.pathname}></NavigationLink>
          ))}
          </div>
          <div className="h-[1px] w-full  bg-slate-200"></div>
    
          
         
        </div>
      
      </nav>
    </div>
  );
};

export default Sidebar;
