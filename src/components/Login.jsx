import React from "react";
import { Routes, Route } from "react-router-dom";
import { BiFolder, BiNote, BiChevronRight, BiCog } from "react-icons/bi";
import Searchbar from "./Searchbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Item from "./Item";
import Scrollbar from "smooth-scrollbar";
const Login = () => {
  const ref = React.useRef(null);
  const scrollRef = React.useRef(null);

  const userCollectionRef = collection(db, "notes");

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    
    Scrollbar.init(scrollRef.current)
    
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
    
  }, []);


  return (
    <Routes>
      <Route
        path="/*"
        element={
          <div className="font-plus tracking-tight bg-[#eaeced] text-[#102031]  h-screen relative flex  items-start justify-start ">
            {/* sidebar */}
            <div className="h-screen bg-gray-50 w-fit sample flex-shrink-0   flex items-start justify-start">
              {/* category */}
              <div className="flex-shrink-0 h-full w-[4.5rem] flex flex-col items-center justify-start py-8 thin-right-divider">
                <div className="flex flex-col items-start justify-start h-full">
                  <div className="h-[3rem] flex-shrink-0 box-border w-[3rem] text-gray-100 rounded-lg bg-[#3286fb] p-1.5 flex flex-col items-end justify-end">
                    <span className="text-sm font-medium">Ne</span>
                  </div>
                </div>
                <div>
                  <BiCog className="text-2xl text-[#a8a7a7]" />
                </div>
              </div>
              {/* links */}
              <div className="h-full w-[20rem] flex-shrink-0">
                <div className=" mt-28 min-h-[4rem] px-6  w-full">
                  <div className="px-0 text-[0.875rem] mb-6 font-semibold flex items-center justify-start gap-3">
                    <BiFolder className="text-xl" />
                    <span>Collections</span>
                  </div>
                  {/* items */}
                  {users[0]?.categories.map((item, id) => (
                    <div
                      key={id}
                      className={` cursor-pointer   py-3 rounded-lg px-4 text-[0.85rem] my-2 flex items-center justify-start gap-3 font-semibold ${
                        id === 0
                          ? "bg-[#f4f4f4]/50"
                          : "bg-inherit text-[#122132]/30 "
                      }`}
                    >
                      <div className="flex items-center justify-start gap-3 w-full">
                        <BiNote className="text-lg " />
                        <span>{item.category}</span>
                      </div>
                      <BiChevronRight className="text-xl" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* content */}
            <div className="w-full h-full flex items-center justify-start py-6">
              <div className="flex h-full rounded-lg  sample bg-white mx-4 items-start pt-0 justify-start px-0 w-[25rem]  flex-col">
                <span className="text-[1.075rem] ml-6 mt-6 mb-6 tracking-tight font-semibold">
                  Select notes
                </span>
                <div className="pb-4 thin-bottom-divider w-full px-2">
                  <Searchbar />
                </div>
                <div
                  ref={scrollRef}
                  className="  py-2 h-screen w-full flex flex-col items-center justify-start  px-1 overflow-auto"
                >
                  {/* items */}
                  {/* {Array.from({length:10},(item,id)=>(
                    <div key={id} className="h-52 flex-shrink-0 w-full my-2 bg-blue-500"></div>
                  ))} */}
                  {users[0]?.categories[0].data.map((item, id) => (
                    <Item key={id} id={id} item={item}></Item>
                  ))}
                  {users[0]?.categories[0].data.map((item, id) => (
                    <Item key={id} id={id} item={item}></Item>
                  ))}
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
