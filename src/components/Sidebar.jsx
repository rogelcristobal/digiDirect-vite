import React from "react";
import { BiCog, BiMoon, BiChevronRight } from "react-icons/bi";
import { TbFolder } from "react-icons/tb";
import { NavLink } from "react-router-dom";
const Sidebar = ({ docs, loading }) => {
  return (
    <div className="h-screen bg-[#ffffff] w-fit flex-shrink-0   flex items-start justify-start">
      {/* category */}
      <div className="flex-shrink-0 h-full w-[5rem] bg-[#1e293c] flex flex-col items-center justify-start py-8 thin-right-divider">
        <div className="flex flex-col items-start justify-start h-full">
          <div className="h-[3.5rem] flex-shrink-0 box-border w-[3.5rem] text-gray-100 rounded-xl bg-[#3286fb] p-1.5 flex flex-col items-end justify-end">
            <span className="text-sm font-medium">Ne</span>
          </div>
        </div>
        <div className="text-[1.8rem] text-[#a8a7a7] gap-2 flex items-center justify-around flex-col">
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
          <div className="px-0 text-[1rem] mb-3 text-[#1b2838]/30  font-semibold flex items-center justify-start gap-3">
            {/* <TbFolder className="text-xl " /> */}
            <span>My notes</span>
          </div>
          {/* items */}
          {/* // bg-[#1d1f20] text-[#dad8db] */}
          {!loading &&
            docs.map((item, id) => (
              <NavLink key={id} to={`/${item.name}`}>
                {({ isActive }) => (
                  <div
                    key={id}
                    className={
                      `cursor-pointer text-[0.9rem] text-[#1b2838]/80 font-bold py-3.5 rounded-lg px-6 ${isActive&&'bg-[#f6f6f6]/30 '} my-2 flex items-center justify-start gap-4  `
                    }
                  >
                    <div className="flex items-center justify-start gap-3 w-full">
                      {/* <TbFolder className="text-lg " /> */}
                      {/* <div className="h-2 w-2 rounded-full bg-blue-500"></div> */}
                      <span className="text-[1.0825rem] font-semibold">{item.name}</span>
                    </div>
                    <BiChevronRight className="text-2xl" />
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
