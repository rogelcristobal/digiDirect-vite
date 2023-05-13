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
      className={`cursor-pointer  relative py-1.5   px-4  ${
        !isActive ? " text-[#666869]" : "     text-[#ffffff] "
      }   flex items-center justify-start gap-0   font-medium`}
    >
      {/* item name */}
      <div
        className={`flex items-center ${
          isActive && "bg-[#2b2c30]"
        } relative justify-center ml-5 px-3 py-1  rounded-xl w-fit 
       
        `}
      >
        <span className="text-[0.75rem] capitalize  ">
          {data.name.toLowerCase()}
        </span>
        {/* item content count 👇 */}
        <span className="text-[0.7rem] font-normal proportional-nums ml-1.5">({query.length})</span>
      </div>

      {/* this is absolute 👇 */}
      <div
        className={` w-[0.1rem] 
         ${
           itemContentLength === id + 1
             ? "h-[50%] top-0"
             : "h-full top-1/2 -translate-y-1/2"
         }
        ${
          isActive ? "bg-[#37393d]/70" : "bg-[#37393d]/70"
        }  absolute  left-1.5`}
      >
        <div className="reletive h-full">
          <div
            className={`w-3.5 h-[0.1rem] left-0  absolute 
            ${isActive ? "bg-[#37393d]/70" : "bg-[#37393d]/70"}
            ${
              itemContentLength === id + 1
                ? "bottom-0 "
                : "top-1/2 -traslate-y-1/2 "
            }
            
            `}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DropDownitem;
