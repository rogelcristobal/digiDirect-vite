import React from "react";
import { BiCog, BiMoon, BiChevronRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { TbChevronDown,TbPlus } from "react-icons/tb";
const Sidebar = ({ docs, loading }) => {
  return (
    <div className="h-screen bg-[#ffffff] w-fit flex-shrink-0   flex items-start justify-start">
      {/* category */}
      <div className="flex-shrink-0 h-full w-[6rem] thin-right-divider flex flex-col items-center justify-start py-6 ">
        <div className="flex flex-col items-start space-y-3 justify-start h-full">
          <div className="h-[3.5rem] flex-shrink-0 box-border w-[3.5rem] text-gray-100 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 p-1.5 flex flex-col items-end justify-end">
            <span className="text-sm font-medium">Ne</span>
          </div>
        </div>
        <div className="text-[1.7rem] gap-2 flex items-center  justify-around flex-col">
          <div className="cursor-pointer hover:bg-[#a8a7a7]/10 rounded-full p-2.5 ">
            <BiMoon />
          </div>
          <div className="cursor-pointer hover:bg-[#a8a7a7]/10 rounded-full p-2.5 ">
            <BiCog />
          </div>
        </div>
      </div>
      {/* links */}
      <div className="h-full w-[22rem] flex-shrink-0">
        <div className=" mt-32 min-h-[4rem] px-0  w-full">
            {/* items */}
            <button className="w-full flex   items-center justify-start px-4  p-3 text-[1.150rem] font-bold ">
              <div className="w-full h-full flex items-center justify-start gap-3" ><TbChevronDown className="text-lg"/>
              <span>Collections</span></div>
              <button className="thin-box-divider p-2 rounded-lg text-lg text-[#3960ed]"><TbPlus /></button>
            </button>
            {!loading &&
            docs.map((item, id) => (
              <NavLink key={id} to={`/${item.name}`}>
                {({ isActive }) => (
                  <div
                    key={id}
                    className={`cursor-pointer    py-3 pl-14  ${
                      !isActive
                        ? " text-[#060a32]/30"
                        : " border-r-[4px] border-solid border-[#3960ed] bg-blue-200/10"
                    } mt-2.5 ml-0 flex items-center justify-start gap-4  `}
                  >
                    <div className="flex items-center justify-start gap-3 w-full">
                      {/* <TbFolder className="text-lg " /> */}
                      {/* <div className="h-2 w-2 rounded-full bg-blue-500"></div> */}
                      <span className="text-[1.150rem] capitalize   font-semibold">
                        {item.name.toLowerCase()}
                      </span>
                    </div>
                    {/* {isActive&&<BiChevronRight className="text-2xl" />} */}
                  </div>
                )}
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
