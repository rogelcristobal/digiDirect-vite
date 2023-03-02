import React, { useContext } from "react";
import DocsContext from "../context/DocsContext";
import DropDown from "./DropDown";
import { FiLayout, FiLayers } from "react-icons/fi";
const Sidebar = () => {
  const { state } = useContext(DocsContext);

  return (
    <div className="h-[calc(100vh-3rem)] sticky top-[3.8rem]    box-border  w-[26rem]   ">
      {/*sidebar content */}
      <nav className=" h-full w-full  px-[1.7rem] overflow-y-auto  box-border  ">
        {/* items */}
        <div className=" pt-8  h-full w-full  font-inter ">
          <div className="w-full box-border   h-full ">
            <DropDown
              dropDownTitle={state && state.category}
              icon={<FiLayout />}
              initialState
            >
              {/* title section/href */}
              <a
                href={`#${state.category}`}
                className={`relative text-[0.850rem] capitalize  box-border  block font-[400] py-1.5 rounded-md text-left  px-2.5   
                 w-full  cursor-pointer ${
                   !state.viewState
                     ? "text-slate-900"
                     : " text-[#2a38d8] font-[500]"
                 }`}
              >
                {state.title}
                 {/* <div
                    className={`h-[90%] w-[1.4px]   absolute top-1/2 -translate-y-1/2 -left-0 ${
                      state.viewState ? "bg-[#2a38d8]" : "bg-slate-100"
                    }`}
                  ></div> */}
              </a>
              {/* content items */}
              {state.sections.map((item, id) => (
                <>
                  {item.category && (
                    <p className=" text-[0.850rem] mt-6 mb-2 box-border  text-left font-inter  inline-block  font-semibold text-black capitalize ">
                      {item.category}
                    </p>
                  )}
                  <a
                    key={id}
                    href={`#${item.title}`}
                    
                    className={` relative text-[0.850rem]  capitalize px-2.5   box-border font-[400] text-left py-1.5  rounded-md flex  font-inter ${
                      item.child && "ml-0"
                    }  w-full  cursor-pointer  ${
                      !item.viewState
                        ? "text-slate-700"
                        : " text-[#2a38d8] font-[500] "
                    }`}
                  >
                    {item.title}

                    {/* <div
                    className={`h-[100%] w-[1.4px]   absolute top-1/2 -translate-y-1/2 -left-0 ${
                      item.viewState ? "bg-[#2a38d8]" : "bg-slate-200"
                    }`}
                  ></div> */}
                  </a>
                </>
              ))}
            </DropDown>
            <DropDown
              dropDownTitle="Create product listing"
              icon={<FiLayers />}
            ></DropDown>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
