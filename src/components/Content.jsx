import React from "react";
import { FiEdit } from "react-icons/fi";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { NavLink, Routes, Route } from "react-router-dom";
import Searchbar from "./Searchbar";
import Item from "./Item";
import { TbSearch } from "react-icons/tb";
const Content = ({ id, path, title }) => {
  const [query, setQuery] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const noteCollectionRef = collection(db, path);
  React.useEffect(() => {
    const unsubscribe = onSnapshot(noteCollectionRef, (snapshot) => {
      setQuery(
        snapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          ?.sort((a, b) => a.title?.localeCompare(b.title))
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
  // if (!loading) {
  //   console.log(title, query);
  // }

  return (
    <div className="relative w-full bg-[#292b2f] h-screen p-0 box-border">
      {/* <div className="fixed top-0 h-[3.7rem] w-full  bg- thin-bottom-divider"> </div> */}
      <div className="h-full container mx-auto  flex flex-col items-start ">
        {/* page header */}
        <div className="   pt-10 pb-10 px-12 w-full  h-fit flex-col flex ">
          <span className="text-xs mb-3 font-medium text-[#666869]">
            Collections 
          </span>
          <span className="text-2xl font-medium "> Collections</span>
        </div>
        {/* page content */}
        <div className="px-10 w-full  h-full  ">
          <div className="mt-0 h-full w-full flex gap-4">

            <div className="h-full py-2 px-4 rounded-lg bg-[#25262c]/80 w-[22rem]">
              {/* head */}
              <div className=" h-fit">
                <span className="text-xs text-[#666869]">Dana Chats</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
