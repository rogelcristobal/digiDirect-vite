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
      <div className="h-full pt-10 container mx-auto  flex flex-col items-start ">
        {/* page header */}
        <div className="pt-0   pb-6 px-8 w-full  h-fit flex-col flex ">
          {/* <span className="text-xs mb-0 font-medium text-[#666869]">
            Collections 
          </span> */}
          <span className="text-[1.40rem] font-semibold">  Chats</span>
        </div>
        {/* page content */}
        <div className="pl-6 pr-16 w-full  h-full  ">
          <div className="h-full w-full flex gap-4">
           
            <div className="   bg-[#eeeeee]/60 w-[26rem]     ">
              <div className="overflow-y-scroll  h-[74vh] mt-14 pr-1 pl-1.5  space-y-3">
                
              {Array.from({length:20}).map((item,id)=>(
                <div className="w-full h-40 bg-[#ffffff] thin-box-divider cursor-pointer  hover:sample2" key={id}></div>
              ))}
              </div>
            </div>

            <div className="bg-[#eeeeee]/60 h-full  w-full "></div>


           

          

          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
