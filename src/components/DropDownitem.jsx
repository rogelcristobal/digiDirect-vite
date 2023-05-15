import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "../firebase/firebase";

const DropDownitem = ({ data, isActive, id, itemContentLength }) => {
  const path = `my-notes/4bGwXxiddNvQyrkB1LWv/collection/${data.id}/data`;
  const [query, setQuery] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const noteItemCollectionRef = collection(db, path);
  React.useEffect(() => {
    const unsubscribe = onSnapshot(noteItemCollectionRef, (snapshot) => {
      setQuery(snapshot.docs.map((doc) => ({ ...doc.data() })));
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [data]);

  return (
    <div
      key={id}
      className={`cursor-pointer  relative py-1.5   pl-2  ${
        !isActive ? " text-[#909296]/60" : "     text-white"
      }   flex items-center justify-start gap-0   font-medium`}
    >
      {/* item name */}
      <div
        className={`flex items-center  relative justify-center ml-2 pl-2 py-1  rounded-xl w-fit 
       
        `}
      >
        <span className="text-[0.7rem] capitalize  font-normal">
          {data.name.toLowerCase()}
        </span>
        {/* item content count 👇 */}
        <span className="text-[0.7rem] font-medium proportional-nums ml-1.5">({query.length})</span>
      </div>

      {/* this is absolute 👇 */}
      {/* <div
        className={` w-[2px] 
         ${
           itemContentLength === id + 1
             ? "h-[50%] top-0"
             : "h-full top-1/2 -translate-y-1/2"
         }
        ${
          isActive ? "bg-gray-600/10" : "bg-gray-600/10"
        }  absolute  left-2.5`}
      >
        <div className="reletive h-full">
          <div
            className={`w-3.5 h-[2px] left-0  absolute 
            ${isActive ? "bg-gray-600/10" : "bg-gray-600/10"}
            ${
              itemContentLength === id + 1
                ? "bottom-0 "
                : "top-1/2 -traslate-y-1/2 "
            }
            
            `}
          ></div>
        </div>
      </div> */}


      {isActive&&<div className="absolute top-1/2 -translate-y-1/2  rounded-l-lg -right-3 bg-white h-[70%] w-[2px]"></div>}
    </div>
  );
};

export default DropDownitem;
