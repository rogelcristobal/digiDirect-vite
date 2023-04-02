import React from "react";

const ItemContainer = ({item}) => {
  return (
    <div className={`w-full px-10 py-3   cursor-pointer my-2 `}>
      <p className="font-semibold relative mb-6 text-[0.875rem]  text-[#122132]/90">
        {item.title}
        <div className="h-1.5 w-1.5 bg-blue-500 rounded-full absolute top-1/2 -translate-y-1/2 -left-4"></div>
      </p>
      <p className="text-[0.8rem] font-medium overflow-hidden truncate font-libreationRegular tracking-tight text-[#122132]/50">
        {item.detail.split(/<br\s*\/?>/).map((item, id) => (
          <React.Fragment key={id}>
            {item}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default ItemContainer;
