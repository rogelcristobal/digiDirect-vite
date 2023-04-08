import React from "react";
import { BiCog, BiMoon, BiChevronRight } from "react-icons/bi";
import { TbFolder } from "react-icons/tb";
import { NavLink } from "react-router-dom";
const Sidebar = ({ docs, loading }) => {
  return (
    <div className="h-screen bg-[#101213] w-fit  flex-shrink-0   flex items-start justify-start">
      {/* category */}
      <div className="flex-shrink-0 h-full w-[4.5rem] bg-[#000000] flex flex-col items-center justify-start py-8 thin-right-divider">
        <div className="flex flex-col items-start justify-start h-full">
          <div className="h-[3rem] flex-shrink-0 box-border w-[3rem] text-gray-100 rounded-lg bg-[#3286fb] p-1.5 flex flex-col items-end justify-end">
            <span className="text-sm font-medium">Ne</span>
          </div>
        </div>
        <div className="text-2xl text-[#a8a7a7] gap-2 flex items-center justify-around flex-col">
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
        <div className=" mt-32 min-h-[4rem] px-6  w-full">
          <div className="px-0 text-[0.9rem] mb-6   font-bold flex items-center justify-start gap-3">
            {/* <TbFolder className="text-xl " /> */}
            <span>Collection</span>
          </div>
          {/* items */}
          {!loading &&
            docs.map((item, id) => (
              <NavLink
              key={id}
              to={`/${item.name}`}>
                <div
                // bg-[#1d1f20] text-[#dad8db]
                key={id}
                className={` cursor-pointer  py-3.5 rounded-lg px-6 text-[1.025rem] my-2.5 flex items-center justify-start gap-4 font-medium 
                    `}
              >
                <div className="flex items-center justify-start gap-3 w-full">
                  <TbFolder className="text-lg " />
                  {/* <div className="h-2 w-2 rounded-full bg-blue-500"></div> */}
                  <span>{item.name}</span>
                </div>
                <BiChevronRight className="text-2xl" />
              </div>
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
