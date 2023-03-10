import React, { useContext } from "react";
import DocsContext from "../context/DocsContext";
import DropDown from "./DropDown";
import { FiLayout, FiLayers } from "react-icons/fi";
const Sidebar = () => {
  const { state } = useContext(DocsContext);

  return (
    <div className="h-[calc(100vh-3rem)] sticky top-[3.8rem]    box-border  w-[20rem]   ">
      {/*sidebar content */}
      <nav className=" h-full w-full  overflow-y-auto  box-border  ">
        {/* items */}
        <div className="   px-0 h-full w-full  font-inter ">
          <div className="pb-52 pt-8 w-full box-border overflow-y-scroll  h-full ">
          
              {/* title section/href */}
              <a
                href={`#${state.category}`}
                className={` relative text-[0.850rem]  capitalize   box-border font-[400] text-left py-2 px-7  flex  font-inter ${
                   !state.viewState
                     ? "text-gray-900"
                     : " text-[#0055ff] "
                 }`}
              >
                {state.title}
                 <div
                    className={`h-[100%] w-[3px]   absolute top-1/2 -translate-y-1/2 left-0 ${
                      state.viewState ? "bg-[#0055ff]" : "bg-gray-100"
                    }`}
                  ></div>
              </a>
              {/* content items */}
              {state.sections.map((item, id) => (
                <>
                  {/* {item.category && (
                    <p className=" text-[0.850rem] mt-4 mb-2 box-border  text-left font-inter tracking-tight normal-case inline-block px-7 font-semibold text-gray-900  ">
                      {item.category}
                    </p>
                  )} */}
                  <a
                    key={id}
                    href={`#${item.title}`}
                    className={` relative text-[0.850rem]  normal-case   box-border font-[400]  py-1.5    tracking-tight flex  font-inter  ${
                      item.child ? "ml-0  mt-0 pl-11":"pl-7 mt-3"
                    }  w-full  cursor-pointer  ${
                      !item.viewState
                        ? "text-gray-700"
                        : " text-[#0055ff] bg-blue-500/10"
                    }`}
                  >
                    {item.title}

                    <div
                    className={`h-[100%] w-[3px]   absolute top-1/2 -translate-y-1/2 left-0.5 ${
                      item.viewState ? "bg-[#0055ff]" : "bg-gray-100"
                    }`}
                  ></div>
                  </a>
                </>
              ))}
            
          
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
