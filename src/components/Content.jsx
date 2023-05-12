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
   <div className="relative w-full  h-screen p-0 box-border">
    <div className="fixed top-0 h-24 w-full  bg-white sample"> </div>
    <div className="h-full w-full flex flex-col items-start pt-28 ">
      {/* page header */}
      <div className=" pb-12 w-full  h-fit px-[6rem] flex-col flex gap-1">
        {/* <span className="text-lg font-medium text-[#bbbed3]">Collections   &#x3e;  Chats</span>
        <span className="text-[2.4rem] font-semibold"> Chats</span> */}
      </div>
      {/* page content */}

      <div className=" w-full  h-full  px-12">
        <div className="mt-0 h-full w-full bg-white px-12 pt-28  sample">
{/* bg-[#f9fbfc] */}
          <div className="h-full w-[35rem] thin-box-divider rounded-xl">

          </div>

        </div>
      </div>

    </div>
   </div>
  );
};

export default Content;
