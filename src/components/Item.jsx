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
      className={`rounded-xl flex-shrink-0 w-[25rem] relative  px-5 py-4 cursor-pointer ${
        !state ? "bg-[#fbfbfb] " : "bg-[#f6f6f6]/90 "
      }`}
    >
      <p
        className={`capitalize text-sm ${
          state ? "text-gray-900" : "text-gray-400/50"
        }`}
      >
        19 apr
      </p>
      <p
        className={`font-[600] mt-3 text-[0.975rem] ${
          state ? "text-gray-700" : "text-gray-400"
        }`}
      >
        {item.title}
      </p>
      <p
        className={` text-[0.85rem] mt-2 truncate	overflow-hidden ${
          state ? "text-gray-400" : "text-gray-500/40"
        }`}
      >
        {item.detail.props.children[0]}
      </p>
      {/* {item.category && (
        <div
          className={`text-[0.85rem] mt-6 ${
            state ? "bg-[#f0eeee] text-gray-500" : "text-gray-300 bg-[#f7f7f7]"
          }  py-1.5 rounded-md px-3 w-fit`}
        >
          {item.category}
        </div>
      )} */}

      <div
      onClick={(e)=>e.stopPropagation()}
        className={`absolute top-3.5 right-3 text-xl rounded-full p-2  ${
          state
            ? "text-gray-300 hover:text-gray-400 hover:bg-[#f0eeee]"
            : "text-gray-300 hover:bg-[#f7f7f7]"
        }`}
      >
        <BiDotsVerticalRounded />
      </div>
    </div>
  );
};

export default Item;
