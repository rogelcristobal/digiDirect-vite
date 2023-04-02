import React from "react";
import { BiNote ,BiDotsVerticalRounded} from "react-icons/bi";
const Item = ({ item, id }) => {
  const [state,setState]=React.useState(false)
  const handleClickItem=()=>{
    setState(!state)
  }
  return (
    <div
      onClick={handleClickItem}
      className={`w-full ${
        state ? "" : null
      } relative px-4 py-5 cursor-pointer my-0  flex-shrink-0`}
    >
      <div className="font-bold flex items-center justify-start relative mb-3 text-[0.875rem]  text-[#122132]/80">
        <BiNote
          className={`text-xl mr-3  ${
            state ? "text-[#122132]/50" : "text-[#122132]/20"
          }`}
        />
        <span
          className={`max-w-[75%] w-full  overflow-hidden truncate ${
            !state && "text-[#122132]/30"
          }`}
        >
          {item.title}
        </span>
      </div>
      <p
        className={`text-[0.825rem] mx-8 font-semibold overflow-hidden truncate font-libreationRegular tracking-tight ${state?"text-[#122132]/50":"text-[#122132]/30"} `}
      >
        {item.detail}
        {/* use logic when displaying */}
        {/* {item.detail.split(/<br\s*\/?>/).map((item, id) => (
          <React.Fragment key={id}>
            {item}
            <br />
          </React.Fragment>
        ))} */}
      </p>
      {state ? (
        <div className="absolute h-full w-1 bg-[#3286fb] top-0 -left-1"></div>
      ) : null}

      
    </div>
  );
};

export default Item;
