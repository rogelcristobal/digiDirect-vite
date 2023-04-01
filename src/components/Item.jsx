import React from "react";
import { BiDotsVerticalRounded,BiNote } from "react-icons/bi";

const Item = ({ dateUpdate, title, description }) => {
  const [hover, setHover] = React.useState(false);
  const handleHover = () => {
    setHover(!hover);
  };
  const [state, setState] = React.useState(false);
  const handleClick = () => {
    setState(!state);
  };
  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={`rounded-lg flex items-center justify-start flex-shrink-0 w-[15rem] my-2 relative  px-6 py-4 cursor-pointer overflow-hidden 
      ${!state ? "dark:bg-inherit " : "dark:bg-[#0c0c0d] bg-[#f6f6f6]/80"}
      `}
    >
      
      <p className={`font-medium tracking-tight font-inter flex items-center justify-start gap-3 max-w-[90%] text-[0.9rem] ${state ? " text-gray-900" : "dark:text-[#d3d3d3] text-gray-300"}`}
      >
        <BiNote className={`text-lg ${state?'text-gray-900':'text-gray-300'}`}/>
        {title}
      </p>
    

      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute top-1/2 -translate-y-1/2 right-1.5 text-xl rounded-full p-2  ${
          state
            ? "text-gray-100 hover:bg-[#2f4570] "
            : "text-gray-400/40 hover:dark:bg-[#1b1c1d]"
        }`}
      >
        <BiDotsVerticalRounded />
      </div>
    </div>
  );
};

export default Item;
