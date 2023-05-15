import React from "react";
import { HiOutlineFolder } from "react-icons/hi";
import DropDown from "./DropDown";
import { NavLink } from "react-router-dom";
import { TbChevronDown, TbPlus } from "react-icons/tb";
import { query } from "firebase/firestore";
import { BiNote } from "react-icons/bi";
import {TbNote,TbCheckbox } from 'react-icons/tb'
import {HiOutlineWrench} from 'react-icons/hi2'
const Sidebar = ({ docs, loading }) => {
  const [state, setState] = React.useState([]);

  return (
    <div className="h-full  w-fit flex-shrink-0  bg-[#252525] flex items-start justify-start">
      {/* category */}
      <div className="w-16 h-full sample2 thin-right-divider"></div>
      {/* links */}
      <div className="h-full pt-24 w-[18rem] flex items-start justify-end flex-shrink-0">
     

        <div className=" max-w-[15.5rem] pb-8 pl-2 pr-2  box-border flex flex-col items-center w-full justify-start">
            {/* <div className=" h-fit w-full  pt-20 px-7">
        <span className="font-semibold">Project.01.v1</span>
       </div> */}
          {/* items */}
          <DropDown icon={<TbNote className="mr-2.5 text-gray-text-inherit text-[1.25rem]"/>} loading={loading} content={docs} title='Collections' initialState ></DropDown>
          
          <DropDown icon={<HiOutlineWrench className="mr-2.5 text-gray-text-inherit text-[1.25rem]"/>} loading={loading} title="Tools"></DropDown>

           <DropDown icon={<TbCheckbox className="mr-2.5 text-gray-text-inherit text-[1.25rem]"/>} loading={loading} title="ToDos"></DropDown>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
