import React, { useContext } from "react";
import DocsContext from "../context/DocsContext";
import DropDown from "./DropDown";
import { FiLayout, FiLayers } from "react-icons/fi";
const Sidebar = () => {
  const { state } = useContext(DocsContext);

  return (
    <div className="h-[calc(100vh-3rem)] sticky top-[3.8rem]    overflow-y-auto  box-border flex-auto justify-start items-start w-[23.5rem]   ">
      {/*sidebar content */}
      <nav className="relative h-full w-full px-[0rem] mt-8 mb-40   box-border lg:px-[1rem] ">
        {/* items */}
        <div className=" h-full w-full text-left flex items-center flex-col justify-start  font-inter space-y-4">
          <div className="w-full box-border block">
            <DropDown
              dropDownTitle={state && state.category}
              icon={<FiLayout />}
              initialState
            >
              {/* title section/href */}
              <a
                href={`#${state.category}`}
                className={`relative text-[0.875rem] capitalize  box-border  block font-[400] py-2 rounded-md
                 w-full  cursor-pointer ${
                   !state.viewState
                     ? "text-slate-900"
                     : " text-[#356be5] font-[500]"
                 }`}
              >
                {state.title}
              </a>
              {/* content items */}
              {state.sections.map((item, id) => (
                <>
                  {item.category && (
                    <p className=" text-[0.85rem] mt-4 lg:mb-3 box-border  text-left font-inter  font-semibold text-slate-900 capitalize ">
                      {item.category}
                    </p>
                  )}
                  <a
                    key={id}
                    href={`#${item.title}`}
                    className={`relative text-[0.875rem]  capitalize pl-3 inline-block box-border font-[400] py-1.5 rounded-md  font-inter ${
                      item.child && "ml-0"
                    }  w-full  cursor-pointer ${
                      !item.viewState
                        ? "text-slate-700"
                        : " text-[#356be5] font-[500] "
                    }`}
                  >
                    {item.title}

                    {/* <div
                    className={`h-[90%] w-[1.5px]   absolute top-1/2 -translate-y-1/2 -left-5 ${
                      item.viewState ? "bg-[#356be5]" : "bg-slate-100"
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
