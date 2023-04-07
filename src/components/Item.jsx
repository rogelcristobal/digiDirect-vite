import React from "react";
import { BiFile ,BiDotsVerticalRounded,BiCheck} from "react-icons/bi";
import {TbDotsVertical} from 'react-icons/tb'
const Item = ({ item, id }) => {
  const [state,setState]=React.useState(false)
  const handleClickItem=()=>{
    setState(!state)
  }
  return (
    <div
      onClick={handleClickItem}
      className={`w-full ${
        state ? "bg-[#1a1c1e]" : 'bg-[#101213] '
      } relative px-5 py-5 cursor-pointer rounded-xl box-border my-3 w-[21.9rem] flex-shrink-0`}
    >
      <div className="font-bold flex items-center justify-between relative mb-6 text-[0.875rem]  text-[#122132]/80">
       
        <span
          className={`max-w-[75%] text-[0.975rem] w-full font-medium  overflow-hidden truncate ${
            !state ? "text-[#7c7c7c] ":"text-gray-100/90"
          }`}
        >
          {item.title}
        </span>
        <div className={`${
            !state ? "text-[#7c7c7c] ":"text-gray-100/90"
          } text-xl`}><TbDotsVertical /></div>
      </div>
      <p
        className={`text-[0.885rem] ml-0 mr-2  tracking-wide overflow-hidden truncate font-libreationRegular  ${state?"text-[#7c7c7c]":"text-[#7c7c7c]/70 "}`}
      >
        {/* {item.details} */}
        {/* use logic when displaying */}
        {item.details.split(/<br\s*\/?>/).map((item, id) => (
          <React.Fragment key={id}>
            {item}
            <br />
          </React.Fragment>
        ))}
      </p>
      {/* {state ? (
        <div className="absolute p-1 rounded-full text-white bg-[#3286fb] -top-3 right-1">
          <BiCheck />
        </div>
      ) : null} */}
     {/* {state ? (
        <div className="absolute w-[1px] h-full rounded-l-lg text-white bg-[#3286fb] top-0 -right-2">
          </div>
      ) : null}  */}

      
    </div>
  );
};

export default Item;
