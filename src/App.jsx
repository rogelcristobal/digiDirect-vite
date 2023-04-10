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
          <div className="font-plus bg-[#fbfbfb] text-[#1b2838] h-screen relative flex  items-start justify-start ">
            {/* <Navbar /> */}
            <Sidebar docs={query} loading={loading} />
            <div className="w-full h-full  px-7 flex items-start justify-start py-0 rounded-xl   ">
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
