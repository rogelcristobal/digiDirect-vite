import React from "react";
import { TbCheckbox } from "react-icons/tb";
import DropDown from "./DropDown";
import { NavLink } from "react-router-dom";
import { query } from "firebase/firestore";
import { BiNote } from "react-icons/bi";
import {FiFolder } from 'react-icons/fi'
import {HiOutlineWrench} from 'react-icons/hi2'
const Sidebar = ({ docs, loading }) => {
  const [state, setState] = React.useState([]);

  return (
    <div className="h-full thin-right-divider  w-fit flex-shrink-0  bg-[#ffffff] flex items-start justify-start">
      {/* category */}
      <div className="w-16 h-full thin-right-divider  "></div>
      {/* links */}
      <div className="h-full pt-24 w-[15.5rem] flex flex-col items-center justify-start flex-shrink-0">
     
        {/* <span className="mb-12 ml-12 w-full font-semibold">
        ProjectApp

        </span> */}
        <div className=" max-w-[15.5rem] pb-8 pl-4 pr-3  box-border flex flex-col items-start w-full justify-start">
           {/* <span className="font-medium text-[#909296]/60 ml-1  text-xs mb-5">Categories</span> */}
          {/* items */}
          <DropDown icon={<FiFolder className="mr-2.5 text-gray-text-inherit text-[1.2rem]"/>} loading={loading} content={docs} title='Collection' initialState ></DropDown>
          
          <DropDown icon={<HiOutlineWrench className="mr-2.5 text-gray-text-inherit text-[1.2rem]"/>} loading={loading} title="Tools"></DropDown>

           <DropDown icon={<TbCheckbox className="mr-2.5 text-gray-text-inherit text-[1.2rem]"/>} loading={loading} title="ToDos"></DropDown>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
