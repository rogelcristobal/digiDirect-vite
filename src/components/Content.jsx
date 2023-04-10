import React from "react";
import Scrollbar from "smooth-scrollbar";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import AddItemComponent from "./AddItemComponent";
import Debug from "./Debug";
import Item from "./Item";
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
    <div className="container h-full flex items-start gap-3 justify-start ">
      <div className="flex h-full rounded-xl  items-start pt-4 justify-start w-[24rem] flex-shrink-0 flex-col">
        <div className="  w-full px-2 flex items-center justify-between ">
          <span className="text-[1.7rem]  text-[#fcfcfc]  font-semibold">
              {title}
          </span>
        </div>
        <div className="pb-4 relative pt-12 w-full px-0 ">
          <span className="text-[#fcfcfc]   text-[0.9rem] font-medium ml-1  ">
            Notes
            <span className="text-[#fcfcfc]/40 ml-2 font-semibold">
              {query.length}
            </span>
          </span>
        </div>
        <div className=" pb-2 pt-4 pr-[0.7rem] pl-0  h-screen  w-full overflow-y-scroll  flex flex-col items-center justify-start">
          <AddItemComponent path={path}/>
          {!loading &&
            query.map((item, id) => (
              <Item key={id} id={id} title={item.title} details={item.details} createdAt={item.createdAt}></Item>
            ))}
        </div>
      </div>
      <div className="w-full pt-40 h-full">
        <div className="h-full  w-full rounded-lg ">
          <Debug />
        </div>
      </div>
    </div>
  );
};

export default Content;
