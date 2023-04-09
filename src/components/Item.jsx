import React from "react";

const Item = ({ id, item }) => {
  const date = item.createdAt.toDate().toLocaleDateString();
  const time = item.createdAt.toDate().toLocaleTimeString();
  return (
    <div
      key={id}
      className="py-4 px-5 min-h-[6rem] flex-shrink-0 w-full hover:bg-[#1a1c1e] bg-[#101213] rounded-lg mb-3 cursor-pointer"
    >
      <div className="flex mb-4 items-center justify-between">
        <p className=" text-sm text-[#fcfcfc]/20">{date}</p>

        <p className=" text-sm text-[#fcfcfc]/20">{time}</p>
      </div>
      <p className="mb-6 text-[#fcfcfc]/80 text-[1.05rem]">{item.title}</p>
      {item?.details.split(/<br\s*\/?>/).map((item, id) => (
        <React.Fragment key={id}>
          {item}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Item;
