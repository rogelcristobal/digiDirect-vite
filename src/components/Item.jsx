import React from "react";

const Item = ({ id, title, details, createdAt }) => {
  const date = createdAt?.toDate().toLocaleDateString();
  const time = createdAt?.toDate().toLocaleTimeString();
  return (
    <div
      key={id}
      className="pt-3 px-6 min-h-fit flex-shrink-0 w-full thin-bottom-divider  mb-0 cursor-pointer"
    >
      <div className="flex mb-3 items-center text-[#1b2838]/40 justify-between">
        <p className=" text-[0.8rem] font-bold ">{date}</p>

        <p className=" text-[0.8rem] font-bold">{time}</p>
      </div>
      <p className="mb-6  text-[0.975rem] text-[#1b2838]/80 font-bold">{title}</p>
      
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
