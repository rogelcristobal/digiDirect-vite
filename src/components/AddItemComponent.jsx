import React from "react";
import { TbPlus } from "react-icons/tb";
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase/firebase";
import { collection, addDoc ,serverTimestamp } from "firebase/firestore";
const AddItemComponent = ({ path }) => {
  const [title, setTitle] = React.useState("");
  const [details, setDetails] = React.useState("");

  const noteCollectionRef = collection(db, path);
  const handleOnClick = async () => {
    await addDoc(noteCollectionRef, { title: title, details: details, createdAt: serverTimestamp()});
    setDetails("");
    setTitle("");
  };

  return (
    <>
      <button
        // onClick={handleOnClick}
        className={` cursor-pointer px-5 rounded-xl mb-3.5 w-full text-[#fcfcfc]/50  bg-[#101213] hover:bg-[#1a1c1e] h-fit py-6 flex-shrink-0 flex  items-center justify-start gap-3`}
      >
        <TbPlus className="text-2xl " />
        Add new item
      </button>
      {/* <div className="w-full h-fit bg-gray-100 flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="h-12 text-black my-3 block w-full"
        />
        <input
          type="text"
          placeholder="details"
          onChange={(e) => setDetails(e.target.value)}
          value={details}
          className="h-12 text-black my-3 block w-full"
        />
      </div> */}
    </>
  );
};

export default AddItemComponent;
