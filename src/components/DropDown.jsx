import React from "react";
import { HiOutlineFolder } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { TbChevronDown, TbPlus } from "react-icons/tb";
import { query } from "firebase/firestore";
import { BiNote } from "react-icons/bi";
import DropDownitem from "./DropDownitem";

const DropDown = ({ loading, content,title,icon ,initialState}) => {
  const [state, setState] = React.useState(initialState);
  const handleClick = () => {
    setState(!state);
  };
  return (
    <>
      <div
        onClick={handleClick}
        className={`w-full cursor-pointer rounded-lg flex  items-center flex-shrink-0 justify-start px-3.5 py-2  text-sm font-semibold`}
      >
        <div className="w-full h-full  flex items-center justify-between   ">
            {icon}
          <div className="w-full flex items-center justify-start">
            <span className={`text-[0.75rem] font-medium flex items-center ${state?'text-[#ffffff]':'text-[#909296]'}`}>
            {title}
          </span>
          </div>
          {content&&<TbChevronDown className={`text-[1rem] ${state?'text-[#ffffff]':'text-[#909296]'}`} />}
        </div>
      </div>
      <div
        className={`w-full ${
          state ? "h-fit mt-3 mb-4" : "h-0"
        } overflow-hidden flex  flex-col `}
      >
        {!loading &&
          content?.map((item, id) => (
            <NavLink key={id} to={`/${item.name}`} className=" px-2 w-full">
              {({ isActive }) => {
                return (
                  <DropDownitem isActive={isActive} data={item} id={id} itemContentLength={content.length}/>
                );
              }}
            </NavLink>
          ))}
      </div>
    </>
  );
};

export default DropDown;
