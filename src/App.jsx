import React from "react";
import { Routes, Route } from "react-router-dom";
import { TbFolder, TbUser } from "react-icons/tb";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "./firebase/firebase";
import Item from "./components/Item";
import NoteSelectContainer from "./components/NoteSelectContainer";
import AddItemComponent from "./components/AddItemComponent";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
function App() {
  const query = collection(db, "my-notes");
  const [snapshot, loading] = useCollectionData(query);
  return (
    <Routes>
      <Route
        path={`/*`}
        element={
          <div className="font-plus bg-[#000000] text-[#7c7c7c] h-screen relative flex  items-start justify-start ">
            {/* <Navbar /> */}
            <Sidebar docs={snapshot} loading={loading} />
            <div className="w-full h-full  px-8 flex items-start justify-start pb-6 pt-16">
              <Routes>
                {!loading && snapshot.map((item, id) => (
                  <Route
                    key={id}
                    path={`/${item.name}`}
                    element={
                    <Content id={id} ></Content>
                  }
                  ></Route>
                ))}
              </Routes>
            </div>
          </div>
        }
      ></Route>
    </Routes>
  );
}

export default App;
