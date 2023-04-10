import React from "react";
import Scrollbar from "smooth-scrollbar";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import AddItemComponent from "./AddItemComponent";
import Debug from "./Debug";
import Item from "./Item";
import { BiChevronRight } from "react-icons/bi";
const Content = ({ id, path, title }) => {
  // const query = collection(db, "my-notes");
  // const [docs, loading] = useCollectionData(query);
  // console.log("check", docs)

  const [query, setQuery] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const noteCollectionRef = collection(db, path);

  React.useEffect(() => {
    const unsubscribe = onSnapshot(noteCollectionRef, (snapshot) => {
      setQuery(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })).sort((a,b)=> a.createdAt - b.createdAt));
      
      setLoading(false);
    });
    // cleanup function
    return () => {
      unsubscribe();
      
    };
  }, [path]);
  if(!loading){
    console.log(title,query)
  }

  return (
    <div className="container h-screen flex items-start gap-0 rounded-xl  justify-start ">
      <div className="flex h-full items-start pt-20  justify-start w-[32rem]  flex-shrink-0 flex-col">
        <div className="w-full px-3 mb-10 flex flex-col items-start justify-between ">
          <span className="mb-2 font-semibold text-[#1b2838]/50 flex items-center">My Notes  <BiChevronRight className="text-xl" /></span>
          <span className="text-[1.9rem]  font-bold">
            {title}
          </span>
        </div>
        <div className="py-0 rounded-xl  mb-5  relative w-full px-2 ">
          <span className=" text-[#1b2838]/50  text-[0.9rem] font-bold pl-2 py-6  ">
            Notes
            <span className=" ml-1 font-bold">
              {query.length}
            </span>
          </span>
        </div>
        <div className="h-[76vh]  bg-[#ffffff] px-0 pt-12 flex flex-col  rounded-xl w-full">
          
          <div className=" py-0    h-full  w-full overflow-y-scroll  flex flex-col items-center justify-start">
          {/* <AddItemComponent path={path}/> */}
          {!loading &&
            query.map((item, id) => (
              <Item key={id} id={id} title={item.title} details={item.details} createdAt={item.createdAt}></Item>
            ))}
        </div>
        </div>
      </div>
      <div className="w-full   pt-40 h-full">
        <div className="h-full  w-full rounded-lg ">
          <div className="flex items-center justify-end px-8">
            <button className="capitalize bg-[#3286fb] text-white text-md rounded-xl px-6 py-3">add item</button>
          </div>
          {/* <Debug /> */}
        </div>
      </div>
    </div>
  );
};

export default Content;
