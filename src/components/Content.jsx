import React from "react";
import Scrollbar from "smooth-scrollbar";
import { collection } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
const Content = ({ id }) => {
  const query = collection(db, "my-notes");
  const [docs, loading] = useCollectionData(query);
  if (!loading) {
    console.log(docs[id]);
  }

  const ref = React.useRef(null);
  const scrollbarRef = React.useRef(null);

//   React.useEffect(() => {
//     if (!loading && ref.current) {
//       scrollbarRef.current = Scrollbar.init(ref.current, {damping: 0.02,renderByPizels: true,});
//       Scrollbar.detachStyle();
//     }
//    return () => {
//       if (scrollbarRef.current) {
//         scrollbarRef.current.destroy();
//       }
//     };
//   }, [loading]);
  return (
    <div className="container h-full flex items-start gap-3 justify-start ">
      <div className="flex h-full rounded-xl  items-start pt-4 justify-start w-[24rem] flex-shrink-0 flex-col">
        <div className="  w-full px-2 flex items-center justify-between ">
          <span className="text-[1.7rem]  text-[#dadada]  font-medium">
            Collection / {!loading && docs[id].name}
          </span>
        </div>
        <div className="pb-4 relative pt-12 w-full px-0 ">
          <span className=" font-semibold ml-2  ">
            <span className="text-[#7c7c7c]/70 mr-3 font-semibold">
              {!loading && docs[id].data.length}
            </span>
            Files
          </span>
        </div>
        <div
        //   ref={ref}
          className=" pb-2 pt-4 pr-[0.7rem] pl-0  h-screen  w-full overflow-y-scroll  flex flex-col items-center justify-start"
        >
          {!loading &&
            docs[id].data.map((item, id) => (
              <div
                key={id}
                className="py-5 px-5 min-h-[6rem] flex-shrink-0 w-full bg-neutral-900 rounded-lg mb-3 cursor-pointer"
              >
                <p className="mb-4 text-neutral-300">{item.title}</p>
                {item?.details.split(/<br\s*\/?>/).map((item, id) => (
                  <React.Fragment key={id}>
                    {item}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            ))}
        </div>
      </div>
      <div className="w-full pt-40 h-full">
        <div className="h-full  w-full rounded-lg ">{/* content */}</div>
      </div>
    </div>
  );
};

export default Content;
