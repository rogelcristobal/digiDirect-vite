import React from "react";
import { BiCog, BiMoon, BiChevronRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { TbChevronDown, TbPlus } from "react-icons/tb";
const Sidebar = ({ docs, loading }) => {
  return (
    <div className="h-screen bg-[#ffffff]  w-fit flex-shrink-0   flex items-start justify-start">
      {/* category */}
      <div className="flex-shrink-0 bg-[#16191c] h-full w-[5rem] thin-right-divider flex flex-col items-center justify-start py-6 ">
        <div className="flex flex-col items-start space-y-3 justify-start h-full">
          <div className="h-[3.5rem] flex-shrink-0 box-border w-[3.5rem] text-gray-100 rounded-xl  bg-white/10 py-2 px-2 flex flex-col items-end justify-end ">
            <span className="text-base font-medium">Ne</span>
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
          <div className="w-full flex   items-center justify-start px-4 pt-6 p-3 text-[1rem] font-bold ">
            <div className="w-full h-full flex items-center justify-start pl-6">
              <span className="text-[1.1rem]">Collections</span>
            </div>
            <button className="hover:bg-[#f9f9f9]  p-2  text-lg text-[#16191c]">
              <TbPlus />
            </button>
          </div>
          {!loading &&
            docs.map((item, id) => (
              <NavLink key={id} to={`/${item.name}`}>
                {({ isActive }) => (
                  <div
                    key={id}
                    className={`cursor-pointer    py-3 pl-14  ${
                      !isActive ? " text-[#060a32]/30" : "  bg-neutral-200/20"
                    } mb-2 ml-0 flex items-center justify-start gap-4  `}
                  >
                    <div className="flex items-center justify-start gap-3 w-full">
                      {/* <TbFolder className="text-lg " /> */}
                      {/* <div className="h-2 w-2 rounded-full bg-blue-500"></div> */}
                      <span className="text-[1.1rem] capitalize   font-bold">
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
