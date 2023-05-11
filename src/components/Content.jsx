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
   <div className="relative w-full pt-28 h-full  box-border">
    {/* <div className="fixed top-0 left-0 h-24 thin-bottom-divider w-full bg-white"></div> */}

    <div className="h-full w-full ">
      <div className="thin-bottom-divider pb-10 w-full px-20 flex-col flex gap-2">
        <span className="text-lg font-semibold text-[#bbbed3]">Collections   &#x3e;   Dana Chats</span>
        <span className="text-[2.475rem] font-semibold">Dana Chats</span>
      </div>
    </div>

    
   </div>
  );
};

export default Content;
