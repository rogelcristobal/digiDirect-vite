import React from "react";
import { HiOutlineFolder } from "react-icons/hi";
import DropDown from "./DropDown";
import { NavLink } from "react-router-dom";
import { TbChevronDown, TbPlus } from "react-icons/tb";
import { query } from "firebase/firestore";
import { BiNote } from "react-icons/bi";
import {TbFolder,TbTools } from 'react-icons/tb'
import {HiOutlineWrench} from 'react-icons/hi2'
const Sidebar = ({ docs, loading }) => {
  const [state, setState] = React.useState([]);

  return (
    <div className="h-full  bg-[#212327] w-fit flex-shrink-0  thin-right-divider flex items-start justify-start">
      {/* category */}
      <div className="w-16 h-full bg-[#1c1d21] thin-right-divider"></div>
      {/* links */}
      <div className="h-full w-[16rem] flex-shrink-0">
       <div className=" h-fit w-full  pt-10 px-7">
        <span className="font-semibold">Project.01.v1</span>
       </div>

        <div className=" mt-12 pb-8 px-3.5  box-border flex flex-col items-center w-full justify-start">
          {/* items */}
          <DropDown icon={<TbFolder className="mr-2.5 text-[#909294] text-[1.25rem]"/>} loading={loading} content={docs} title='Collection' initialState></DropDown>
          <button className="text-[0.65rem] text-[#666869] hover:text-inherit font-medium sample2 hover:border-0  hover:bg-[#2b2c30] rounded-2xl  box-border w-[95%] py-2 mt-4 mb-4">Add New Item</button>
          <DropDown icon={<HiOutlineWrench className="mr-2.5 text-[#909294] text-[1.25rem]"/>} loading={loading} title="Tools"></DropDown>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
