import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NoteSelectContainer from "./NoteSelectContainer";
import AddItemComponent from "./AddItemComponent";
import Scrollbar from "smooth-scrollbar";
import Item from "./Item";
const Content = ({ docs, loading }) => {
  console.log("content.jsx", docs);
  const option = {
    damping: 0.02,
    renderByPizels: true,
  };
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) {
      Scrollbar.init(ref.current, option);
      Scrollbar.detachStyle();
    }
  }, [ref.current]);
  return (
    <div className="container h-full flex items-start gap-3 justify-start ">
      {/* selector */}
      <div className="flex h-full rounded-xl  items-start pt-4 justify-start w-[24rem] flex-shrink-0 flex-col">
        <div className="  w-full px-2 flex items-center justify-between ">
          <span className="text-[1.7rem]  text-[#dadada]  font-medium">
            Collection / {docs.name}
          </span>
        </div>

        <div className="pb-4 relative pt-12 w-full px-0 ">
          <span className=" font-semibold ml-2  ">
            <span className="text-[#7c7c7c]/70 mr-3 font-semibold">
              {!loading && docs.data.length}
            </span>
            Files
          </span>
          {/* <Searchbar /> */}
          {/* <div className="h-12 left-0 w-full bg-gradient-to-b from-[#000000] via-[#000000]/10 to-transparent absolute z-10 -bottom-[30%]"></div> */}
        </div>

        <div
          ref={ref}
          className=" pb-2 pt-4  h-screen w-full   flex flex-col items-center justify-start  "
        >
          <AddItemComponent />
          {!loading &&
            docs.data.map((item, id) => (
              <Item
                key={id}
                id={id}
                title={item.title}
                details={item.details}
                loading={loading}
              ></Item>
            ))}
        </div>
      </div>
      <div className="w-full pt-40 h-full">
        <div className="h-full  w-full rounded-lg ">{/* content */}</div>
      </div>
    </div>
  );
};

export default Content;
