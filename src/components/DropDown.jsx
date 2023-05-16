import React from "react";
import { HiOutlineFolder } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { TbChevronDown, TbPlus } from "react-icons/tb";
import { query } from "firebase/firestore";
import { BiNote } from "react-icons/bi";
import DropDownitem from "./DropDownitem";

const DropDown = ({ loading, content, title, icon, AddBtn, initialState }) => {
  const [state, setState] = React.useState(initialState);
  const handleClick = () => {
    setState(!state);
  };
  return (
    <>
      <div
        onClick={handleClick}
        className={`w-full cursor-pointer  flex rounded-md items-center  flex-shrink-0 justify-start px-4  pb-2.5 pt-2.5  text-sm font-semibold ${state?'  bg-[#f7f4f4]/40 ':''}`}
      >
        <div className="w-full h-full  flex items-center justify-between ">
            {icon}
          <div className="w-full ml-0 flex items-center justify-start">
            <span
              className={` font-medium flex text-[0.785rem] items-center ${
                state ? "" : ""
              }`}
            >
              {title}
            </span>
          </div>
          {content && (
            <TbChevronDown
              className={`text-[1.2rem] ${
                state ? "text-[#909296]/80" : " -rotate-90"
              }`}
            />
          )}
        </div>
      </div>
     {content&& <div
        className={`w-full ${
          state ? "h-fit mt-1.5 mb-1.5 pb-2 pt-1" : "h-0 "
        } overflow-hidden flex  flex-col `}
      >
        {!loading &&
          content?.map((item, id) => (
            <NavLink key={id} to={`/${item.name}`} className=" px-2 w-full">
              {({ isActive }) => {
                return (
                  <DropDownitem
                    isActive={isActive}
                    data={item}
                    id={id}
                    itemContentLength={content.length}
                  />
                );
              }}
            </NavLink>
        ))}

        {AddBtn && (
          <button className="text-[0.65rem] text-[#666869] hover:text-inherit font-semibold sample2 hover:border-0  hover:bg-[#2b2c30] rounded-2xl  box-border w-[95%] mx-auto py-2 mt-6 mb-2">
            Add New Item
          </button>
        )}
      </div>}
    </>
  );
};

export default DropDown;
