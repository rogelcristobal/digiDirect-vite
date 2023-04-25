import React from "react";
import Scrollbar from "smooth-scrollbar";
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
      <div className="flex h-full items-start pt-16 box-border justify-start w-[40rem] flex-shrink-0 flex-col">
        <span className="text-[2rem] ml-4 mb-12 capitalize font-semibold">
            {title.toLowerCase()} 
        </span>
        <div className="w-full mb-6 flex items-center justify-start">
          <span className="font-bold text-gray-900/30 pl-3 text-[1rem]">
            Total notes:
          </span>
          <span className="font-bold text-gray-900 pl-2  text-[1rem]">
            {query.length}
          </span>
        </div>
        <div className="h-[80vh] pt-0 px-0 bg-[#ffffff] rounded-xl overflow-y-scroll items-center  flex flex-col justify-center  w-full">
          <div className="pt-4 pb-0 thin-bottom-divider flex flex-col items-start justify-start px-2  w-full">
            <div className="w-full  flex items-center justify-between">
              <span className="font-bold text-gray-900 pl-4 tracking-tight text-[1.1rem]">
                Saved notes
              </span>
              <button className=" rounded-full p-3 text-2xl mr-0 hover:bg-[#f6f8fb]/80 bg-[#f6f8fb]/40 hover:text-[#2c84fb]">
                <TbSearch />
              </button>
            </div>

            <div className="mt-10 w-full  px-6 mb-4 flex items-center  justify-between  text-gray-900/30 font-bold capitalize">
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
      <div className="w-full  pt-0 h-screen">
        
      </div>
    </div>
  );
};

export default Content;
