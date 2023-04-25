import React from "react";
import { Routes, Route } from "react-router-dom";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./firebase/firebase";
import Sidebar from "./components/Sidebar";
import Content from './components/Content'
import Navbar from "./components/Navbar";
function App() {
  const [query, setQuery] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  //root collection
  const notesCollectionRef = collection(db, "notes");
  // fetch onload
  React.useEffect(() => {
    const unsubscribe = onSnapshot(notesCollectionRef, (snapshot) => {
      setQuery(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    });
    // cleanup function
    return () => {
      unsubscribe();
    };
  }, []);

  if (!loading) {
    console.log(query);
  }

  return (
    <Routes>
      <Route
        path={`/*`}
        element={
          <div className="font-plus bg-[#f9f9f9]  text-[#060a32] pt-0 h-full relative flex  items-start justify-start ">

            <Sidebar docs={query} loading={loading} />
            <div className="w-full h-full  pt-0 flex items-start justify-start py-0 rounded-xl   ">
              <Routes>
                {!loading &&
                  query.map((item, id) => (
                    <Route
                      key={id}
                      path={`/${item.name}`}
                      element={<Content id={id} path={`notes/${item.id}/data`} title={item.name}></Content>}
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
