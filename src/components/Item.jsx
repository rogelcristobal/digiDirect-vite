import React from "react";
import { NavLink } from "react-router-dom";
const Item = ({ id, title, details, createdAt }) => {
  const date = createdAt?.toDate().toLocaleDateString();
  const time = createdAt
    ?.toDate()
    .toLocaleTimeString([], {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  return (
    <NavLink
      key={id}
      to={`/${title}`}
      className="py-6 thin-bottom-divider hover:bg-[#fafbfe] text-gray-900/50 hover:text-gray-900/80 pl-8 pr-6 min-h-fit flex-shrink-0 w-full flex items-center justify-between  mb-0 rounded-lg cursor-pointer"
    >
      <p className=" text-lg   max-w-[26rem] overflow-hidden truncate font-bold capitalize  ">
        {title.toLowerCase()}
      </p>
      <div className="flex mb-0 items-center  gap-16 text-gray-900/40 justify-between">
        <p className=" text-[0.9rem] font-bold">{time}</p>
        <p className=" text-[0.9rem] font-bold ">{date}</p>

      </div>

      {/* {details?.split(/<br\s*\/?>/).map((item, id) => (
        <React.Fragment key={id}>
        {item}
          <br />
        </React.Fragment>
      ))} */}
    </NavLink>
  );
};

export default Item;
