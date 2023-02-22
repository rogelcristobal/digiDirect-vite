import React,{useContext} from "react";
import DocsContext from "../context/DocsContext";
import NavigationLink from "./NavigationLink";
import {FiBook,FiBox} from 'react-icons/fi'

const Sidebar = () => {

  const {state} = useContext(DocsContext)
  return (
    <div className="h-[calc(100vh-5.5rem)] sticky top-16     lg:px-8 box-border flex justify-start items-start w-[22rem] overflow-y-auto  pt-12 thin-right-divider ">
      {/*sidebar content */}
      <nav className="relative h-full w-full px-[0rem] ">
        <p className=" text-sm  text-left font-inter  font-[600] capitalize mb-4">
          Get started
        </p>
        {/* items */}
        <div className="  h-full w-full text-left flex items-center flex-col justify-start  font-inter space-y-4">
          <div className="w-full box-border space-y-1.5 flex flex-col  items-start justify-start">
            {/* {[{title:'Documentation',pathname:'documentation',icon:<FiBook/>},{title:'Product listing helper',pathname:'listing-helper',icon:<FiBox />}].map((item,id)=>(
             <NavigationLink key={id} icon={item?.icon} title={item.title} path={item.pathname}></NavigationLink>
          ))} */}

           {state.sections.map((item,id)=>(
               <a
                key={id}
                href={`#${item.category}`}
                className={`relative text-sm font-medium py-1 ${item.child&& 'ml-4'}  w-full  cursor-pointer ${
                  !item.viewState ? "text-slate-500/70" : " text-[#5138ed]"
                }`}
              >
                {item.title}
                
              </a>
          ))}



          </div>
         
    
          
         
        </div>
      
      </nav>
    </div>
  );
};

export default Sidebar;
