import React from "react";
import { BiFile, BiDotsVerticalRounded, BiCheck } from "react-icons/bi";
import { TbDotsVertical } from "react-icons/tb";
const Item = ({ title,details }) => {
  const [state, setState] = React.useState(false);
  const ref = React.useRef(null)
  const handleClickItem = () => {
    setState(!state);
  };
  React.useEffect(()=>{
    if(ref.current){
      ref.current.style.width = "23rem"

    }
  },[ref.current])
  return (
    <div
      ref={ref}
      onClick={handleClickItem}
      className={`w-full ${
        state ? "bg-[#1a1c1e]" : "bg-[#101213] "
      } relative px-5 py-5 cursor-pointer rounded-xl box-border mb-3.5 flex-shrink-0`}
    >
      <div className="font-bold flex items-center justify-between relative mb-6 text-[0.875rem]  text-[#122132]/80">
        <span
          className={`max-w-[75%] text-[1.1rem] w-full font-medium tracking-wide  overflow-hidden truncate ${
            !state ? "text-[#7c7c7c] " : "text-gray-100/90"
          }`}
        >
          {title}
        </span>
        <div
          className={`${
            !state ? "text-[#7c7c7c] " : "text-gray-100/90"
          } text-xl`}
        >
          <TbDotsVertical />
        </div>
      </div>
      <p
        className={`text-[0.885rem] ml-0 mr-2  tracking-wide overflow-hidden truncate font-libreationRegular  ${
          state ? "text-[#7c7c7c]" : "text-[#7c7c7c]/70 "
        }`}
      >
        {/* {details} */}
        {/* use logic when displaying */}
        {details.split(/<br\s*\/?>/).map((item, id) => (
          <React.Fragment key={id}>
            {item}
            <br />
          </React.Fragment>
        ))}
      </p>
      {/* {state ? (
        <div className="absolute p-1 rounded-full text-white bg-[#3286fb] -top-3 right-3">
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
