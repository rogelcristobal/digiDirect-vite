import React from "react";

const Item = ({ id, title, details, createdAt }) => {
  const date = createdAt?.toDate().toLocaleDateString();
  const time = createdAt?.toDate().toLocaleTimeString([], {hour:"numeric", minute:"numeric",hour12:true});
  return (
    <div
      key={id}
      className="pt-3 px-6 min-h-fit flex-shrink-0 w-full thin-bottom-divider  mb-0 rounded-lg cursor-pointer"
    >
      <div className="flex mb-3 items-center text-[#1b2838]/30 justify-between">
        <p className=" text-[0.8rem] font-bold ">{date}</p>

        <p className=" text-[0.8rem] font-bold">{time}</p>
      </div>
      <p className="mb-6  text-[0.9rem] text-[#0a0b3d]/70 font-bold  tracking-wide">{title}</p>
      
      {/* {details?.split(/<br\s*\/?>/).map((item, id) => (
        <React.Fragment key={id}>
          {item}
          <br />
        </React.Fragment>
      ))} */}
      
    </div>
  );
};

export default Item;
