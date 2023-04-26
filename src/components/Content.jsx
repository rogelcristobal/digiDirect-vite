import React from "react";
import { FiEdit } from "react-icons/fi";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { NavLink, Routes, Route } from "react-router-dom";
import Searchbar from "./Searchbar";
import Item from "./Item";
import { TbSearch } from "react-icons/tb";
const Content = ({ id, path, title }) => {
  // const query = collection(db, "my-notes");
  // const [docs, loading] = useCollectionData(query);
  // console.log("check", docs)

  const [query, setQuery] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const noteCollectionRef = collection(db, path);

  React.useEffect(() => {
    const unsubscribe = onSnapshot(noteCollectionRef, (snapshot) => {
      setQuery(
        snapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .sort((a, b) => a.title.localeCompare(b.title))
        // date sort
        // .sort((a, b) => a.createdAt - b.createdAt)
      );

      setLoading(false);
    });
    // cleanup function
    return () => {
      unsubscribe();
    };
  }, [path]);
  if (!loading) {
    console.log(title, query);
  }

  return (
    <div className=" h-full w-full px-12 flex items-start  gap-8  justify-center ">
      <div className="flex h-full items-start pt-[4.5rem] box-border justify-start w-[37rem] flex-shrink-0 flex-col">
        <span className="text-[2rem] ml-2 flex items-end justify-start gap-2 mb-12 capitalize font-semibold">
          {title.toLowerCase()}
          <button className="text-[1.3rem] text-[#060a32]/20 p-2.5  cursor-pointer hover:text-[#2c84fb]">
            <FiEdit />
          </button>
        </span>
        <div className=" rounded-xl bg-[#ffffff] px-1.5 py-1.5 w-full mb-6">
          <Searchbar></Searchbar>
        </div>
          {/* total notes */}
          <div className="w-full mb-4 flex items-center justify-start">
            <span className="font-bold text-gray-900/30 pl-3 text-[1rem]">
              Total notes:
            </span>
            <span className="font-bold text-gray-900/30 pl-2  text-[1rem]">
              {query.length}
            </span>
          </div>

        <div className="h-[73vh] pt-0 px-0 bg-[#ffffff] rounded-xl overflow-y-scroll items-center  flex flex-col justify-center  w-full">
          <div className="pt-7 pb-0 thin-bottom-divider flex flex-col items-start justify-start px-2  w-full">
            <div className="w-full  flex items-center justify-start">
              <span className="font-bold text-gray-900 pl-6 tracking-tight text-[1.2rem]">
                Saved notes
              </span>
            </div>

            <div className="mt-8 w-full  px-6 mb-4 flex items-center  justify-between  text-gray-900/30 font-bold capitalize">
              <span>Name</span>
              <div className="w-fit  flex gap-20 mr-6">
                <span>time</span>
                <span>date</span>
              </div>
            </div>
          </div>

          <div className=" py-0  px-0  h-full   w-full overflow-y-scroll  flex flex-col items-center justify-start">
            {!loading &&
              query.map((item, id) => (
                <Item
                  key={id}
                  id={id}
                  title={item.title}
                  details={item.details}
                  createdAt={item.createdAt}
                ></Item>
              ))}
          </div>
        </div>
      </div>
      <div className="w-full  pt-0 h-screen"></div>
    </div>
  );
};

export default Content;
