import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NoteSelectContainer from "./NoteSelectContainer";
import AddItemComponent from "./AddItemComponent";
import DBQueryContext from '../context/DBQueryContext'
import Scrollbar from "smooth-scrollbar";
import Item from "./Item";
const Content = ({ id }) => {
  const {docs,loading} = React.useContext(DBQueryContext)
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
            Collection / {docs[id].name}
          </span>
        </div>

        <div className="pb-4 relative pt-12 w-full px-0 ">
          <span className=" font-semibold ml-2  ">
            <span className="text-[#7c7c7c]/70 mr-3 font-semibold">
              {!loading && docs[id].data.length}
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
          {!loading ? docs[id].data.map((item, id) => (
            <div
              key={id}
              className="py-5 px-5 min-h-[6rem] w-full bg-neutral-900 rounded-lg mb-3 cursor-pointer"
            >
              <p className="mb-4 text-neutral-300">{item.title}</p>
              {item.details.split(/<br\s*\/?>/).map((item, id) => (
                <React.Fragment key={id}>
                  {item}
                  <br />
                </React.Fragment>
              ))}
            </div>
          )):
          <p>loading</p>
          }
        </div>
      </div>
      <div className="w-full pt-40 h-full">
        <div className="h-full  w-full rounded-lg ">{/* content */}</div>
      </div>
    </div>
  );
};

export default Content;
