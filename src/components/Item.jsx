import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
const Item = ({ id, item }) => {
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
      key={id}
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={`rounded-lg flex-shrink-0 w-[23rem] my-2.5 relative  px-3 py-3  cursor-pointer 
      ${
        !state ? "bg-inherit " : "bg-[#0c0c0d]"
      }
      `}
    >
      <p
        className={`capitalize text-[0.7rem] font-liberationRegular tracking-tighter ${
          state ? "text-neutral-200/20" : "text-neutral-200/20"
        }`}
      >
        19 apr
      </p>
      <p
        className={`font-[500] mt-2 text-[0.85rem] ${
          state ? "text-neutral-200" : "text-[rgb(178,179,182)]"
        }`}
      >
        {item.title}
      </p>
      <p
        className={`tracking-tighter text-[0.8rem] mt-2 truncate font-liberationRegular	overflow-hidden ${
          state ? "text-[rgb(113,113,113)]" : "text-[rgb(113,113,113)]/50"
        }`}
      >
        {item.detail.props.children[0]}
      </p>
      {/* {item.category && (
        <div
          className={`text-[0.85rem] mt-6 ${
            state ? "bg-[#f0eeee] text-neutral-500" : "text-neutral-300 bg-[#f7f7f7]"
          }  py-1.5 rounded-md px-3 w-fit`}
        >
          {item.category}
        </div>
      )} */}

      <div
      onClick={(e)=>e.stopPropagation()}
        className={`absolute top-2 right-2 text-xl rounded-full p-2  ${
          state
            ? "text-neutral-400 hover:text-neutral-400 hover:bg-[#1b1c1d]"
            : "text-neutral-400/40 hover:bg-[#1b1c1d]"
        }`}
      >
        <BiDotsVerticalRounded />
      </div>
    </div>
  );
};

export default Item;
