import React from "react";
import { BiNote } from "react-icons/bi";
const Item = ({ item, id }) => {
  return (
    <div
      className={`w-full ${
        id == 0 ? "" : null
      } relative px-5 py-6 cursor-pointer my-0  flex-shrink-0`}
    >
      <div className="font-bold flex items-center justify-start relative mb-3 text-[0.875rem]  text-[#122132]/80">
        <BiNote
          className={`text-xl mr-3  ${
            id == 0 ? "text-[#122132]/20" : "text-[#122132]/20"
          }`}
        />
        <span
          className={`max-w-[75%] w-full  overflow-hidden truncate ${
            !id == 0 ? "text-[#122132]/30 " : ""
          }`}
        >
          {item.title}
        </span>
      </div>
      <p
        className={`text-[0.825rem] mx-8 font-semibold overflow-hidden truncate font-libreationRegular tracking-tight ${id==0?"text-[#122132]/50":"text-[#122132]/30"} `}
      >
        {item.detail}
        {/* {item.detail.split(/<br\s*\/?>/).map((item, id) => (
          <React.Fragment key={id}>
            {item}
            <br />
          </React.Fragment>
        ))} */}
      </p>
      {id == 0 ? (
        <div className="absolute h-full w-1 bg-[#3286fb] top-0 -left-1"></div>
      ) : null}
    </div>
  );
};

export default Item;
