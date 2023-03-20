import React, { useContext } from "react";
import DocsContext from "../context/DocsContext";
import DropDown from "./DropDown";
import { FiLayout, FiLayers } from "react-icons/fi";
const Sidebar = () => {
  const { state } = useContext(DocsContext);

  return (
    <div className="h-[calc(100vh-3rem)] sticky top-[0rem]  thin-right-divider  box-border  w-[23rem]   ">
     
      <nav className=" h-full w-full  overflow-y-auto  box-border  ">

        {/* <div className=" pt-4   h-full w-full overflow-y-scroll pb-52 box-border ">
          <div className="w-full box-border   h-full ">
              <span className="font-semibold text-sm ml-6 ">On this page</span>
               <a
                href={`#${state.category}`}
                className={` relative text-[0.850rem] mt-2 capitalize   box-border font-[400] text-left py-2 px-7  flex  font-inter ${
                   !state.viewState
                     ? "text-gray-900"
                     : " text-blue-500 bg-blue-400/10"
                 }`}
              >
                {state.title}
                 <div
                    className={`h-[100%] w-[3px]   absolute top-1/2 -translate-y-1/2 left-0 ${
                      state.viewState ? "bg-blue-500" : "bg-gray-100"
                    }`}
                  ></div>
              </a>
   
              {state.sections.map((item, id) => (
                <>
                  {item.category && (
                    <p className=" text-[0.850rem] mt-6 mb-2 box-border  text-left font-inter tracking-tight  inline-block px-7 font-semibold text-gray-900 capitalize ">
                      {item.category}
                    </p>
                  )}
                  <a
                    key={id}
                    href={`#${item.title}`}
                    className={` relative text-[0.850rem]  capitalize   box-border font-[400] text-left py-2 px-6 tracking-tight flex  font-inter  ${
                      item.child && "ml-0"
                    }  w-full  cursor-pointer  ${
                      !item.viewState
                        ? "text-gray-700"
                        : " text-blue-500 bg-blue-500/10"
                    }`}
                  >
                    {item.title}

                    <div
                    className={`h-[100%] w-[3px]   absolute top-1/2 -translate-y-1/2 left-0 ${
                      item.viewState ? "bg-blue-500" : "bg-gray-100"
                    }`}
                  ></div>
                  </a>
                </>
              ))}
            
          
          </div>
        </div> */}
      </nav>
    </div>
  );
};

export default Sidebar;
