import React from "react";
import { Routes, Route } from "react-router-dom";
import AddItemComponent from "./AddItemComponent";
import { BiChevronRight, BiCog, BiMoon, BiPlus } from "react-icons/bi";
import { TbFolder, TbUser, TbCopy } from "react-icons/tb";
import Searchbar from "./Searchbar";
import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../firebase/firebase";
import Item from "./Item";
import NoteSelectContainer from "./NoteSelectContainer";
const Login = () => {
  const query = collection(db, "notes");
  const [docs, loading, error] = useCollectionData(query);
  if (!loading) {
    console.log(docs);
  }

  const createNotes = async () => {};

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <div className="font-plus bg-[#0c0c0d] text-[#7c7c7c] h-screen relative flex  items-start justify-start ">
            {/* nav */}
            <div className="fixed top-0 right-0 w-[calc(100%-26.5rem)] h-24 px-12 flex items-end justify-end">
              <div className="rounded-full h-12 w-12 bg-[#101213] grid place-content-center text-xl">
                <TbUser />
              </div>
            </div>
            {/* sidebar */}
            <div className="h-screen bg-[#101213] w-fit  flex-shrink-0   flex items-start justify-start">
              {/* category */}
              <div className="flex-shrink-0 h-full w-[4.5rem] bg-[#0c0c0d] flex flex-col items-center justify-start py-8 thin-right-divider">
                <div className="flex flex-col items-start justify-start h-full">
                  <div className="h-[3rem] flex-shrink-0 box-border w-[3rem] text-gray-100 rounded-lg bg-[#3286fb] p-1.5 flex flex-col items-end justify-end">
                    <span className="text-sm font-medium">Ne</span>
                  </div>
                </div>
                <div className="text-2xl text-[#a8a7a7] gap-2 flex items-center justify-around flex-col">
                  <div className="cursor-pointer hover:bg-[#a8a7a7]/10 rounded-full p-2.5 ">
                    <BiMoon />
                  </div>
                  <div className="cursor-pointer hover:bg-[#a8a7a7]/10 rounded-full p-2.5 ">
                    <BiCog />
                  </div>
                </div>
              </div>
              {/* links */}
              <div className="h-full w-[22rem] flex-shrink-0">
                <div className=" mt-32 min-h-[4rem] px-6  w-full">
                  <div className="px-0 text-[0.9rem] mb-6   font-bold flex items-center justify-start gap-3">
                    {/* <TbFolder className="text-xl " /> */}
                    <span>Collection</span>
                  </div>
                  {/* items */}
                  <div
                    className={` cursor-pointer  py-3.5 rounded-lg px-6 text-[1.025rem] my-2 flex items-center justify-start gap-4 font-medium 
                         
                             bg-[#1d1f20] text-[#dad8db]
                        `}
                  >
                    <div className="flex items-center justify-start gap-3 w-full">
                      <TbFolder className="text-lg " />
                      {/* <div className="h-2 w-2 rounded-full bg-blue-500"></div> */}
                      <span>My notes</span>
                    </div>
                    <BiChevronRight className="text-2xl" />
                  </div>
                </div>
              </div>
            </div>

            {/* content */}
            <div className="w-full h-full  px-8    flex items-start justify-start pb-6 pt-16">
              <div className="container h-full flex items-start gap-3 justify-start ">
                {/* selector */}
                <div className="flex h-full rounded-xl  items-start pt-4 justify-start  w-[24rem] flex-shrink-0 flex-col">
                  <div className="  w-full px-2 flex items-center justify-between ">
                    <span className="text-[1.8rem]  text-[#dadada]  font-semibold">
                      My Notes
                    </span>
                  </div>

                  <div className="pb-4 relative pt-12 w-full px-0 ">
                    <span className=" font-semibold ml-2 text-[#dadada] ">
                      Categories
                      <span className="text-[#7c7c7c]/70 ml-3 font-semibold">
                        {!loading && docs.length}
                      </span>
                    </span>
                    {/* <Searchbar /> */}
                    {/* <div className="h-12 left-0 w-full bg-gradient-to-b from-[#000000] via-[#000000]/10 to-transparent absolute z-10 -bottom-[30%]"></div> */}
                  </div>
                  <NoteSelectContainer deps={loading}>
                    {/* <AddItemComponent /> */}
                    {!loading &&
                      docs.map((item, id) => (
                        <Item key={id} id={id} item={item}></Item>
                      ))}
                  </NoteSelectContainer>
                </div>
                <div className="w-full pt-40 h-full">
                  <div className="h-full w-full rounded-lg ">
                    <span className="text-[#dadada] ml-8 block text-2xl">
                      Chats
                    </span>
                    <span className="flex items-center justify-start gap-2 ml-8 mt-8 text-[#dadada] ">
                      Notes
                      <span className="text-[#7c7c7c]/70 font-semibold">{!loading && docs.length}</span>
                    </span>

                    <div className="h-96 overflow-hidden w-full pt-4 ">
                      {!loading &&
                        docs[2].data.map((item, id) => (
                          <>
                            <div className="h-[4.5rem] cursor-pointer w-[40rem] ml-8 flex items-center justify-between px-6 mb-3 rounded-lg bg-[#000000] ">
                              <span className="text-[#dadada]/90 font-semibold">
                                {item.title}
                              </span>
                              <span className="text-[#7c7c7c]/70 text-3xl font-semibold">
                                <TbCopy />
                              </span>
                            </div>
                            <div className="ml-8 pl-6 bg-[#000000] mb-8 py-6 w-[40rem]">
                              {/* use logic when displaying */}
                              {item.details
                                .split(/<br\s*\/?>/)
                                .map((item, id) => (
                                  <React.Fragment key={id}>
                                    {item}
                                    <br />
                                  </React.Fragment>
                                ))}
                            </div>
                          </>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      ></Route>
    </Routes>
  );
};

export default Login;
