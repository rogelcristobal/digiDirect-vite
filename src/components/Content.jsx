import React from "react";
import Scrollbar from "smooth-scrollbar";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";

import Searchbar from "./Searchbar";
import Item from "./Item";
import { BiChevronRight, BiPlus } from "react-icons/bi";
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
    <div className="container h-screen flex items-start gap-4 rounded-xl  justify-start ">
      <div className="flex h-full items-start pt-20  justify-start w-[30rem]  flex-shrink-0 flex-col">
        <div className="w-full px-3 mb-16 flex text-[1.775rem] items-start justify-start ">
          <span className="mb-0 font-medium tracking-tight   flex items-center">
            Collection&#x2f;
          </span>
          <span className="  capitalize font-medium tracking-tight">
            {title.toLowerCase()}
          </span>
        </div>

        <div className="w-full py-3 mb-4 px-2 bg-[#ffffff] flex items-center rounded-lg justify-start">
          <Searchbar />
        </div>
        <div className="h-[68vh] pt-6 px-0 bg-[#ffffff] items-center  flex flex-col justify-start rounded-lg w-full">
          {/* note count total */}
          <div className="py-0 text-[#0a0b3d]/70  pb-6 px-4 flex flex-col thin-bottom-divider gap-1 relative w-full  ">
            <span className="  text-[0.9rem] font-bold pl-2 py-0  ">
               Notes
            </span>
              {/* <span className=" ml-2 text-[1.9rem] font-semibold">{query.length}</span> */}
          </div>
          <div className=" py-0  px-0  h-full  w-full overflow-y-scroll  flex flex-col items-center justify-start">
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
      <div className="w-full   pt-56 h-full">
        <div className="h-full bg-[#ffffff]  w-full rounded-lg ">
          <div className="flex items-center justify-end px-8"></div>
          {/* <Debug /> */}
        </div>
      </div>
    </div>
  );
};

export default Content;
