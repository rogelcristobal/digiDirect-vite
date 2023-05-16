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
      <div className="w-16 h-full thin-right-divider bg-[#1e1e1f] "></div>
      {/* links */}
      <div className="h-full pt-24 w-[15.5rem] flex items-start justify-end flex-shrink-0">
     

        <div className=" max-w-[15rem] pb-8 pl-0 pr-2  box-border flex flex-col items-center w-full justify-start">
            {/* <div className=" h-fit w-full  pt-20 px-7">
        <span className="font-semibold">Project.01.v1</span>
       </div> */}
          {/* items */}
          <DropDown icon={<FiFolder className="mr-2.5 text-gray-text-inherit text-[1.3rem]"/>} loading={loading} content={docs} title='Collection' initialState ></DropDown>
          
          <DropDown icon={<HiOutlineWrench className="mr-2.5 text-gray-text-inherit text-[1.3rem]"/>} loading={loading} title="Tools"></DropDown>

           <DropDown icon={<TbCheckbox className="mr-2.5 text-gray-text-inherit text-[1.3rem]"/>} loading={loading} title="ToDos"></DropDown>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
