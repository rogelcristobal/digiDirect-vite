import React, { useContext } from "react";
import DocsContext from "../context/DocsContext";

const Sidebar = () => {
  const { state } = useContext(DocsContext);
 
  return (
    <div className="h-[calc(100vh-3rem)] sticky top-14    overflow-y-auto  box-border flex-auto justify-start items-start w-[25rem]  thin-right-divider ">
      {/* <div className="h-fit box-border w-full pt-8  thin-box-divider  bg-white  z-30 mb-6 sticky top-0 flex items-center justify-center flex-col">
          <input
            type="text"
            className="placeholder:text-xs  text-sm w-60 medium-box-divider  rounded py-2 px-2"
            placeholder="Search"
          />
        <div className="h-8  w-full bg-gradient-to-b  from-white via-white/70 to-transparent "></div>
      </div> */}
      {/*sidebar content */}
      <nav className="relative h-full w-full px-[0rem] mt-8  box-border lg:px-8">
        
        <p className=" text-[0.85rem]  text-left font-inter  font-[600] capitalize mb-4">
          Get started
        </p>
        {/* items */}
        <div className="  h-full w-full text-left flex items-center flex-col justify-start  font-inter space-y-4">
          <div className="w-full box-border space-y-1.5 flex flex-col  items-start justify-start">
            
              <a
                
                href={`#${state.category}`}
                className={`relative text-[0.85rem] font-medium py-1 
               
                 w-full  cursor-pointer ${
                  !state.viewState ? "text-slate-500/70" : " text-[#356be5]"
                }`}
              >
                {state.title}
              </a>
            
            {state.sections.map((item, id) => (
              <a
                key={id}
                href={`#${item.category}`}
                className={`relative text-[0.85rem] font-medium py-1 ${
                  item.child && "ml-0"
                }  w-full  cursor-pointer ${
                  !item.viewState ? "text-slate-500/70" : " text-[#356be5]"
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>
          
        </div>
         
{/* {[{title:'Product listing helper',pathname:'listing-helper',icon:<FiBox />}].map((item,id)=>(
             <NavigationLink key={id} icon={item?.icon} title={item.title} path={item.pathname}></NavigationLink>
          ))} */}
      </nav>
    </div>
  );
};

export default Sidebar;
