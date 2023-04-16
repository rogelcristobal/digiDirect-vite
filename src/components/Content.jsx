import React from "react";
import Scrollbar from "smooth-scrollbar";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";

import Searchbar from "./Searchbar";
import Item from "./Item";
import { BiChevronRight ,BiPlus} from "react-icons/bi";
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
    <div className="container h-screen flex items-start gap-0 rounded-xl  justify-start ">
      <div className="flex h-full items-start pt-16  justify-start w-[32rem]  flex-shrink-0 flex-col">
        <div className="w-full px-3 mb-12 flex flex-col items-start justify-between ">
          <span className="mb-2 font-bold text-[#1b2838]/30 text-sm flex items-center">
            My Notes <BiChevronRight className="text-xl" />
          </span>
          <span className="text-[1.9rem]  capitalize font-semibold">{title.toLowerCase()}</span>
        </div>
        {/* note count total */}
        <div className="py-0 rounded-xl  mb-5  relative w-full px-2 ">
          <span className="   text-[0.9rem] font-semibold pl-2 py-6  ">
            Notes
            <span className="text-[#1b2838]/30 ml-2 font-semibold">
              {query.length}
            </span>
          </span>
        </div>
        <div className="h-[76vh] pt-16 bg-[#ffffff] items-center  flex flex-col justify-start rounded-2xl w-full">
          {/* <div className="w-full py-5 px-2 thin-bottom-divider flex items-center justify-start">
            <Searchbar />
            
          </div> */}
          <div className=" py-0  thin-top-divider  h-full  w-full overflow-y-scroll  flex flex-col items-center justify-start">
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
      <div className="w-full   pt-40 h-full">
        <div className="h-full  w-full rounded-lg ">
          <div className="flex items-center justify-end px-8">
            <button className="capitalize bg-[#3286fb] text-white text-md rounded-lg px-6 py-3">
              add item
            </button>
          </div>
          {/* <Debug /> */}
        </div>
      </div>
    </div>
  );
};

export default Content;
