import React from "react";
import { Routes, Route } from "react-router-dom";
import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./firebase/firebase";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
function App() {
  const [query, setQuery] = React.useState([]);
  
  const [loading, setLoading] = React.useState(true);
  //root collection
 
  const noteCollection = collection(db, "my-notes/4bGwXxiddNvQyrkB1LWv/collection")

  React.useEffect(()=>{
    const unsubscribe = onSnapshot(noteCollection,(snapshot)=>{
      setQuery(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
      setLoading(false)
    })

      return () => {
      unsubscribe();
    };
  },[])

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


  if (!loading) {
    console.log(query);
  }

  return (
    <Routes>
      <Route
        path={`/*`}
        element={
          <div className="font-plus bg-[#ffffff]  text-[#060a32] pt-0 h-full relative flex  items-start justify-start ">
           
            <Sidebar docs={query} loading={loading} />
            <div className="w-full h-full  pt-0 flex items-start justify-start py-0   ">
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
