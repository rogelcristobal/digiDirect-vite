import React from "react";
import { Routes, Route } from "react-router-dom";
import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./firebase/firebase";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import CollectionContext from "./context/CollectionContext";
function App() {

  // const sourceCollectionRef = collection(db, "digi-notes/p4HUxPaJejWlmgBcKRkj/data");
  // const destinationCollectionRef = collection(db, "my-notes/BWSt0EbQKXvgDqLCw8pz/collection")
  // React.useEffect(()=>{
  //   const fetch = async () => {

  //       const data = await getDocs(sourceCollectionRef);
  //       const response = data.docs.map((doc)=>({...doc.data()}))
  //       console.log(response);

  //       const docsRefs=[]
  //       for( const doc of response){
  //         const docref = await addDoc(destinationCollectionRef,doc)
  //         docsRefs.push(docref);
  //       }

  //   };
  //   fetch();
  // },[])

  // if (!loading) {
  //   console.log(query);
  // }
  const {query ,loading} = React.useContext(CollectionContext)
 
  if(!loading) {
    console.log("CollectionContext",query);
  }
  return (
    <Routes>
      <Route
        path={`/*`}
        element={
          <div className="font-plus  text-[#0b2c44] bg-[#f9f8f8]  pt-0 h-screen relative flex flex-col  items-start justify-start ">
            {/* nav */}
            {/* <div className="h-[3.7rem] fixed z-50 bg-white  w-full shadow-sm flex-shrink-0 "></div> */}
            <div className="w-full h-full   pt-0 flex items-start justify-start py-0   ">
              <Sidebar docs={query} loading={loading} />
              <Routes>
                {!loading &&
                  query.map((item, id) => (
                    <Route
                      key={id}
                      path={`/${item.name}`}
                      element={
                        <Content
                          id={id}
                          path={`my-notes/4bGwXxiddNvQyrkB1LWv/collection/${item.id}/data`}
                          title={item.name}
                        ></Content>
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
