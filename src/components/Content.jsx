import React from "react";
import Scrollbar from "smooth-scrollbar";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { NavLink, Routes, Route } from "react-router-dom";
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
    <div className="container h-full flex items-start gap-8 rounded-xl pl-12 justify-start ">
      <div className="flex h-full items-start pt-16 box-border  justify-start w-[45rem] flex-shrink-0 flex-col">
        <span className="text-[2.2rem] ml-4 mb-14 capitalize font-semibold">
          {title.toLowerCase()}
        </span>

        <div className="h-[85vh] pt-0 px-0 bg-[#ffffff] rounded-xl overflow-y-scroll items-center  flex flex-col justify-start  w-full">
          
          <div className="pt-6 pb-0 thin-bottom-divider flex flex-col items-start justify-start px-2  w-full">
            <span className="font-bold text-gray-900 pl-6 text-[1.275rem]">Saved notes</span>
            <div className="mt-8 w-full px-6 pb-4 flex items-center  justify-between  text-gray-900/30 font-bold capitalize">
              <span>Name</span>
              <div className="w-fit flex gap-20 mr-6">
                <span>time</span>
                <span>date</span>
              </div>
            </div>
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
      <div className="w-full   pt-0 h-full">
        <div className="h-full bg-[#ffffff]  w-full rounded-lg ">
          <div className="flex items-center justify-end px-8">
            <Routes>
              <Route>{/* display the item content here */}</Route>
            </Routes>
          </div>
          {/* <Debug /> */}
        </div>
      </div>
    </div>
  );
};

export default Content;
