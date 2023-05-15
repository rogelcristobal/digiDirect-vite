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
    <div className="relative w-full  h-full p-0 box-border">
      <div className="fixed top-0 h-[3.7rem] w-full  "> </div>
      <div className="h-full pt-14 container mx-auto  flex flex-col items-start ">
        {/* page header */}
        <div className="   pb-10 px-8 w-full  h-fit flex-col flex ">
          {/* <span className="text-xs mb-0 font-medium text-[#666869]">
            Collections 
          </span> */}
          <span className="text-[1.35rem] font-medium"> Welcome Back, User</span>
        </div>
        {/* page content */}
        <div className="px-8 w-full  h-full  ">
          <div className="h-full w-full flex gap-4">
           
            <div className=" h-[80vh] overflow-y-scroll w-[20rem]   space-y-4 ">
              {Array.from({length:20}).map((item,id)=>(
                <div className="w-full h-32 bg-[#2c2c2c]/30 hover:bg-[#2c2c2c]/60 cursor-pointer hover:sample2" key={id}></div>
              ))}
            </div>


           

          

          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
